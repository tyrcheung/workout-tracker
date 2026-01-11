import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

export const exercises = writable([]); // global list of exercises

export function addExercise(name, category) {
  exercises.update(list => [...list, { id: nanoid(), name, category }]);
}

export function updateExercise(id, field, value) {
  exercises.update(list =>
    list.map(ex => ex.id === id ? { ...ex, [field]: value } : ex)
  );
}

export function deleteExercise(id) {
  exercises.update(list => list.filter(ex => ex.id !== id));
}
