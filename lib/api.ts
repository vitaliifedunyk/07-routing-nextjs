import axios from 'axios';
import type { Note } from '../types/note';

axios.defaults.baseURL = 'https://notehub-public.goit.study/api';
const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

type NewNote = Pick<Note, 'title' | 'content' | 'tag'>;

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}
export async function fetchNotes(page: number, search: string) {
  const res = await axios.get<FetchNotesResponse>('/notes', {
    params: {
      page,
      perPage: 12,
      search,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
}
export async function createNote(note: NewNote) {
  const res = await axios.post<Note>('/notes', note, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

export async function deleteNote(id: string) {
  const res = await axios.delete<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

export async function fetchNoteById(id: string) {
  const res = await axios.get<Note>(`/notes/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}
