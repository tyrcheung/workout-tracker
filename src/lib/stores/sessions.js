import { writable } from 'svelte/store';
import { nanoid } from 'nanoid';

export const sessions = writable([]); // global list of sessions

export function addSession(name, date, note) {
  sessions.update(list => [
    ...list,
    { id: nanoid(), name, date, note, sets: [] }
  ]);
}

export function updateSession(id, field, value) {
  sessions.update(list =>
    list.map(s => s.id === id ? { ...s, [field]: value } : s)
  );
}

export function deleteSession(id) {
  sessions.update(list => list.filter(s => s.id !== id));
}

// Sets CRUD inside a session
export function addSet(sessionId, exerciseId) {
  sessions.update(list =>
    list.map(s =>
      s.id === sessionId
        ? { ...s, sets: [...s.sets, { id: nanoid(), exerciseId, reps: 0, weight: 0 }] }
        : s
    )
  );
}

export function updateSet(sessionId, setId, field, value) {
  sessions.update(list =>
    list.map(s =>
      s.id === sessionId
        ? { ...s, sets: s.sets.map(set => set.id === setId ? { ...set, [field]: value } : set) }
        : s
    )
  );
}

export function deleteSet(sessionId, setId) {
  sessions.update(list =>
    list.map(s =>
      s.id === sessionId
        ? { ...s, sets: s.sets.filter(set => set.id !== setId) }
        : s
    )
  );
}
