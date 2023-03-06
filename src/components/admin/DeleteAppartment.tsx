import axios from 'axios';

export const deleteCurrentAppartment = async (id: number) => {
  try {
    await axios.delete(`http://localhost:8000/appartments/${id}`);
    alert('Appartment deleted successfully!');
  } catch (error) {
    console.error(error);
    alert('An error occurred while deleting appartment.');
  }
};
