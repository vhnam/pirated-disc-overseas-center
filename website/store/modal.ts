import { atom } from "jotai";

import { ModalType } from "../types/modal";

export const modalAtom = atom<ModalType[]>([]);

export const derivedModalAtom = atom((get) => get(modalAtom));

type showModalPayload = {
  component: any;
  props: Object;
};

export const showModalAtom = atom(
  null,
  (get, set, payload: showModalPayload) => {
    const currentStack = get(modalAtom);
    const { component, props } = payload;

    return set(modalAtom, [
      ...currentStack,
      {
        id: Date.now(),
        component,
        props,
        isOpen: true,
      },
    ]);
  }
);

export const closeModalAtom = atom(null, (get, set, modalID: number) => {
  const currentStack = get(modalAtom);

  set(
    modalAtom,
    currentStack.filter((modal) => modal.id !== modalID)
  );
});
