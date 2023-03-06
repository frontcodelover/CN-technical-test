import axios from 'axios';

export const deleteCurrentAppartment = async (id: number) => {
  try {
    await axios.delete(`http://localhost:8000/appartments/${id}`);
    alert('Appartement supprimé avec succés !');
  } catch (error) {
    console.error(error);
    alert('Une erreur est survenue.');
  }
};
