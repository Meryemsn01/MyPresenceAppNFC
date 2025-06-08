import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image, Alert, Modal, Pressable } from 'react-native';
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';
import Toast from 'react-native-toast-message';
import { useMenu } from '../context/MenuContext';
// Importez les données de l'emploi du temps mock pour simuler l'affichage de l'emploi du temps de la filière
import { mockSchedule } from '../data/mockData';
import styles from './styles/StudentVerificationPageStyles'; // Importer les styles

const StudentVerificationPage = ({ navigation, route }) => {
  const { scanResult, selectedSession } = route.params || {};
  const { openMenu } = useMenu();

  const student = scanResult?.studentData;
  const status = scanResult?.status; // 'awaiting_approval', 'manual_approve'

  const [showScheduleModal, setShowScheduleModal] = useState(false); // État pour la visibilité de l'emploi du temps
  const [filiereSchedule, setFiliereSchedule] = useState([]); // Emploi du temps de la filière

  useEffect(() => {
    // Préparer l'emploi du temps pour la filière de l'étudiant (purement front-end)
    if (student?.filiere) {
      const scheduleForFiliere = mockSchedule.filter(
        (item) => item.filiere === student.filiere
      ).sort((a, b) => new Date(a.date) - new Date(b.date) || a.timeStart.localeCompare(b.timeStart));
      setFiliereSchedule(scheduleForFiliere);
    }
  }, [student]);

  const handleApprove = async () => {
    // Simuler l'envoi de la décision d'approbation au backend (ex: PUT /api/presences/:presenceld/approve)
    // ###############################################################
    // ################ POINT DE REMPLACEMENT POUR L'API RÉELLE ################
    // ###############################################################
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simuler délai API
    // const response = await fetch(`/api/presences/${scanResult.presenceId}/approve`, { method: 'PUT', ... });
    // if (response.ok) { ... } else { ... }
    // ###############################################################
    // ################ FIN DU POINT DE REMPLACEMENT #################
    // ###############################################################

    Toast.show({
      type: 'success',
      text1: 'Présence Approuvée',
      text2: `Pour <span class="math-inline">\{student?\.name\} \(</span>{student?.matricule}).`,
      visibilityTime: 3000,
    });
    navigation.navigate('NFCScanningPage', { selectedSession: selectedSession });
  };

  const handleReject = async () => {
    // Simuler l'envoi de la décision de rejet au backend (ex: PUT /api/presences/:presenceld/reject)
    // ###############################################################
    // ################ POINT DE REMPLACEMENT POUR L'API RÉELLE ################
    // ###############################################################
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simuler délai API
    // const response = await fetch(`/api/presences/${scanResult.presenceId}/reject`, { method: 'PUT', ... });
    // if (response.ok) { ... } else { ... }
    // ###############################################################
    // ################ FIN DU POINT DE REMPLACEMENT #################
    // ###############################################################

    Toast.show({
      type: 'error',
      text1: 'Présence Rejetée',
      text2: `Pour ${student?.name}.`,
      visibilityTime: 3000,
    });
    navigation.navigate('NFCScanningPage', { selectedSession: selectedSession });
  };

  const handleCancel = () => {
    // Retourne à la page de scan sans action d'approbation/rejet
    Toast.show({
      type: 'info',
      text1: 'Action Annulée',
      text2: 'Vérification annulée, scan en attente.',
      visibilityTime: 2000,
    });
    navigation.navigate('NFCScanningPage', { selectedSession: selectedSession });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* En-tête de page cohérent */}
            <View style={styles.header}>
        {/* Bouton de menu (à gauche) */}
            <TouchableOpacity onPress={openMenu} style={styles.menuButtonLeft}> {/* Nouveau style pour le bouton menu à gauche */}
              <Feather name="menu" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            {/* Titre dynamique (centré) */}
        <Text style={styles.headerTitle}>Vérification Étudiant</Text>
            {/* Espace vide pour centrer le titre si le bouton de menu à gauche est le seul élément de bord */}
            <View style={{ width: 24 }} /> {/* Gardez cet espace pour centrer le titre par rapport au bouton de menu */}
        </View>

      {student ? (
        <View style={styles.studentCard}>
          <Image source={{ uri: student.photoUrl }} style={styles.studentPhoto} />
          <Text style={styles.studentName}>{student.name}</Text>
          <Text style={styles.studentDetail}>Matricule: {student.matricule}</Text>
          <Text style={styles.studentDetail}>ID NFC: {student.nfcId}</Text>

          {/* Filière avec icône et clic pour emploi du temps */}
          <TouchableOpacity style={styles.filiereContainer} onPress={() => setShowScheduleModal(true)}>
            <Text style={styles.filiereText}>Filière: {student.filiere}</Text>
            <Feather name="chevron-down" size={18} color="#0D47A1" />
          </TouchableOpacity>

          {status === 'manual_approve' && (
            <Text style={styles.warningMessage}>Approbation manuelle requise (Incompatibilité).</Text>
          )}

          <View style={styles.sessionDetails}>
            <Text style={styles.sessionTitle}>Session Actuelle:</Text>
            <Text style={styles.sessionDetailText}>{selectedSession.moduleName}</Text>
            <Text style={styles.sessionDetailText}>{selectedSession.date} | {selectedSession.time} | {selectedSession.room}</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.approveButton} onPress={handleApprove}>
              <Text style={styles.buttonText}>Approuver</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.rejectButton} onPress={handleReject}>
              <Text style={styles.buttonText}>Rejeter</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.cancelButton} onPress={handleCancel}>
              <Text style={styles.buttonText}>Annuler</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View style={styles.noStudentCard}>
          <Text style={styles.noStudentText}>Aucune donnée étudiant à vérifier.</Text>
          <TouchableOpacity style={styles.returnButton} onPress={() => navigation.goBack()}>
            <Text style={styles.returnButtonText}>Retour au Scan</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Modal pour afficher l'emploi du temps de la filière */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={showScheduleModal}
        onRequestClose={() => setShowScheduleModal(false)}
      >
        <Pressable style={styles.scheduleModalOverlay} onPress={() => setShowScheduleModal(false)}>
          <View style={styles.scheduleModalContainer} onStartShouldSetResponder={() => true}>
            <Text style={styles.modalTitle}>Emploi du Temps de {student?.filiere}</Text>
            {filiereSchedule.length > 0 ? (
              filiereSchedule.map((item) => (
                <View key={item.id} style={styles.modalScheduleItem}>
                  <Text style={styles.modalScheduleTextBold}>{item.moduleName}</Text>
                  <Text style={styles.modalScheduleText}>{item.date} | {item.timeStart}-{item.timeEnd}</Text>
                  <Text style={styles.modalScheduleText}>{item.room} ({item.classType})</Text>
                </View>
              ))
            ) : (
              <Text style={styles.modalEmptyText}>Aucune séance trouvée pour cette filière.</Text>
            )}
            <TouchableOpacity style={styles.closeModalButton} onPress={() => setShowScheduleModal(false)}>
              <Text style={styles.closeModalButtonText}>Fermer</Text>
            </TouchableOpacity>
          </View>
        </Pressable>
      </Modal>
    </SafeAreaView>
  );
};

export default StudentVerificationPage;