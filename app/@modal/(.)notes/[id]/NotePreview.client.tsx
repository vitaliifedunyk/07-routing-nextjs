'use client';

import { useRouter } from 'next/navigation';
import Modal from '@/components/Modal/Modal';
import type { Note } from '@/types/note';
import css from './NotePreview.module.css';

type Props = {
  note: Note;
};

const NotePreviewClient = ({ note }: Props) => {
  const router = useRouter();

  return (
    <Modal onClose={() => router.back()}>
      <div className={css.item}>
        <div className={css.header}>
          <h2>{note.title}</h2>
          <span className={css.tag}>{note.tag}</span>
        </div>
        <p className={css.content}>{note.content}</p>
        <p className={css.date}>
          Created: {new Date(note.createdAt).toLocaleString()}
        </p>
        <button
          type="button"
          className={css.backBtn}
          onClick={() => router.back()}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default NotePreviewClient;
