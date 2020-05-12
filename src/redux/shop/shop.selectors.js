import { createSelector } from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections => Object.keys(collections).map(key => collections[key])
);

const COLLECTION_ID_MAP = {
  "television": 1,
  "laptops": 2,
  "phones": 3,
  "desktop": 4,
  "accessories": 5
}
export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections => collections.find(
      collection =>collection.id === COLLECTION_ID_MAP[collectionUrlParam]
    )
  ); 