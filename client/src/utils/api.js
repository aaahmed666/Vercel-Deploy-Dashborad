import { ENDPOINTS } from "./endpoints";

export const fetchNavItems = async () => {
  try {
    const response = await fetch(ENDPOINTS.NAV_ITEMS);
    if (!response.ok) {
      throw new Error("Failed to fetch navigation data");
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const trackReorder = async (id, fromIndex, toIndex) => {
  try {
    const response = await fetch(ENDPOINTS.TRACK_REORDER, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, from: fromIndex, to: toIndex }),
    });

    if (!response.ok) {
      throw new Error("Failed to track navigation reorder");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const saveNavItems = async (updatedItems) => {
  try {
    const response = await fetch(ENDPOINTS.NAV_ITEMS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItems),
    });

    if (!response.ok) {
      throw new Error("Failed to save navigation data");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};
