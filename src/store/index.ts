import { createSelectorFunctions } from "auto-zustand-selectors-hook";
import { create } from "zustand";

type State = {
  bears: number;
};

type Actions = {
  actions: {
    increasePopulation: (count: number) => void;
    removeAllBears: () => void;
  };
};

const useStoreBase = create<State & Actions>()((set, get) => ({
  bears: 0,
  actions: {
    increasePopulation: (count: number) =>
      set(() => ({ bears: get().bears + count })),
    removeAllBears: () => set({ bears: 0 }),
  },
}));

export const useStore = createSelectorFunctions(useStoreBase);
