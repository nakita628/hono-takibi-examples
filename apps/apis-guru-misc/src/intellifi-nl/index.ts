import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBlobsIdRoute,
  deleteItemsIdRoute,
  deleteKeysIdRoute,
  deleteKvpairsIdRoute,
  deleteLocationrulesIdRoute,
  deleteLocationsIdRoute,
  deleteSetsItemlistsIdIdsItemIdRoute,
  deleteSetsItemlistsIdRoute,
  deleteSetsSpotlistsIdIdsItemIdRoute,
  deleteSetsSpotlistsIdRoute,
  deleteSubscriptionsIdRoute,
  deleteUsersIdRoute,
  getAuthinfoRoute,
  getBlobsIdDownloadFilenameRoute,
  getBlobsIdRoute,
  getBlobsRoute,
  getEventsIdRoute,
  getEventsRoute,
  getItemsIdRoute,
  getItemsRoute,
  getKeysIdRoute,
  getKeysRoute,
  getKvpairsIdRoute,
  getKvpairsRoute,
  getLocationrulesIdRoute,
  getLocationrulesRoute,
  getLocationsIdRoute,
  getLocationsRoute,
  getPresencesIdRoute,
  getPresencesRoute,
  getServicesIdRoute,
  getServicesRoute,
  getSetsItemlistsIdIdsRoute,
  getSetsItemlistsIdRoute,
  getSetsItemlistsRoute,
  getSetsSpotlistsIdIdsRoute,
  getSetsSpotlistsIdRoute,
  getSetsSpotlistsRoute,
  getSpotsetsIdRoute,
  getSpotsetsRoute,
  getSpotsIdRoute,
  getSpotsIdSetsRoute,
  getSpotsIdSetsSetIdRoute,
  getSpotsRoute,
  getSubscriptionsIdEventsRoute,
  getSubscriptionsIdRoute,
  getSubscriptionsRoute,
  getUsersIdRoute,
  getUsersRoute,
  postBlobsIdUploadRoute,
  postBlobsRoute,
  postItemsRoute,
  postKeysRoute,
  postKvpairsRoute,
  postLocationrulesRoute,
  postLocationsRoute,
  postSetsItemlistsIdIdsRoute,
  postSetsItemlistsRoute,
  postSetsSpotlistsIdIdsRoute,
  postSetsSpotlistsRoute,
  postSpotsetsRoute,
  postSpotsIdSetsRoute,
  postSubscriptionsRoute,
  postUsersRoute,
  putItemsIdRoute,
  putKeysIdRoute,
  putKvpairsIdRoute,
  putLocationrulesIdRoute,
  putLocationsIdRoute,
  putServicesIdRoute,
  putSetsItemlistsIdRoute,
  putSetsSpotlistsIdRoute,
  putSpotsetsIdRoute,
  putSpotsIdRoute,
  putSpotsIdSetsSetIdRoute,
  putSubscriptionsIdRoute,
  putUsersIdRoute,
} from './routes'
import {
  deleteBlobsIdRouteHandler,
  deleteItemsIdRouteHandler,
  deleteKeysIdRouteHandler,
  deleteKvpairsIdRouteHandler,
  deleteLocationrulesIdRouteHandler,
  deleteLocationsIdRouteHandler,
  deleteSetsItemlistsIdIdsItemIdRouteHandler,
  deleteSetsItemlistsIdRouteHandler,
  deleteSetsSpotlistsIdIdsItemIdRouteHandler,
  deleteSetsSpotlistsIdRouteHandler,
  deleteSubscriptionsIdRouteHandler,
  deleteUsersIdRouteHandler,
  getAuthinfoRouteHandler,
  getBlobsIdDownloadFilenameRouteHandler,
  getBlobsIdRouteHandler,
  getBlobsRouteHandler,
  getEventsIdRouteHandler,
  getEventsRouteHandler,
  getItemsIdRouteHandler,
  getItemsRouteHandler,
  getKeysIdRouteHandler,
  getKeysRouteHandler,
  getKvpairsIdRouteHandler,
  getKvpairsRouteHandler,
  getLocationrulesIdRouteHandler,
  getLocationrulesRouteHandler,
  getLocationsIdRouteHandler,
  getLocationsRouteHandler,
  getPresencesIdRouteHandler,
  getPresencesRouteHandler,
  getServicesIdRouteHandler,
  getServicesRouteHandler,
  getSetsItemlistsIdIdsRouteHandler,
  getSetsItemlistsIdRouteHandler,
  getSetsItemlistsRouteHandler,
  getSetsSpotlistsIdIdsRouteHandler,
  getSetsSpotlistsIdRouteHandler,
  getSetsSpotlistsRouteHandler,
  getSpotsetsIdRouteHandler,
  getSpotsetsRouteHandler,
  getSpotsIdRouteHandler,
  getSpotsIdSetsRouteHandler,
  getSpotsIdSetsSetIdRouteHandler,
  getSpotsRouteHandler,
  getSubscriptionsIdEventsRouteHandler,
  getSubscriptionsIdRouteHandler,
  getSubscriptionsRouteHandler,
  getUsersIdRouteHandler,
  getUsersRouteHandler,
  postBlobsIdUploadRouteHandler,
  postBlobsRouteHandler,
  postItemsRouteHandler,
  postKeysRouteHandler,
  postKvpairsRouteHandler,
  postLocationrulesRouteHandler,
  postLocationsRouteHandler,
  postSetsItemlistsIdIdsRouteHandler,
  postSetsItemlistsRouteHandler,
  postSetsSpotlistsIdIdsRouteHandler,
  postSetsSpotlistsRouteHandler,
  postSpotsetsRouteHandler,
  postSpotsIdSetsRouteHandler,
  postSubscriptionsRouteHandler,
  postUsersRouteHandler,
  putItemsIdRouteHandler,
  putKeysIdRouteHandler,
  putKvpairsIdRouteHandler,
  putLocationrulesIdRouteHandler,
  putLocationsIdRouteHandler,
  putServicesIdRouteHandler,
  putSetsItemlistsIdRouteHandler,
  putSetsSpotlistsIdRouteHandler,
  putSpotsetsIdRouteHandler,
  putSpotsIdRouteHandler,
  putSpotsIdSetsSetIdRouteHandler,
  putSubscriptionsIdRouteHandler,
  putUsersIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAuthinfoRoute, getAuthinfoRouteHandler)
  .openapi(getBlobsRoute, getBlobsRouteHandler)
  .openapi(postBlobsRoute, postBlobsRouteHandler)
  .openapi(deleteBlobsIdRoute, deleteBlobsIdRouteHandler)
  .openapi(getBlobsIdRoute, getBlobsIdRouteHandler)
  .openapi(getBlobsIdDownloadFilenameRoute, getBlobsIdDownloadFilenameRouteHandler)
  .openapi(postBlobsIdUploadRoute, postBlobsIdUploadRouteHandler)
  .openapi(getEventsRoute, getEventsRouteHandler)
  .openapi(getEventsIdRoute, getEventsIdRouteHandler)
  .openapi(getItemsRoute, getItemsRouteHandler)
  .openapi(postItemsRoute, postItemsRouteHandler)
  .openapi(deleteItemsIdRoute, deleteItemsIdRouteHandler)
  .openapi(getItemsIdRoute, getItemsIdRouteHandler)
  .openapi(putItemsIdRoute, putItemsIdRouteHandler)
  .openapi(getKeysRoute, getKeysRouteHandler)
  .openapi(postKeysRoute, postKeysRouteHandler)
  .openapi(deleteKeysIdRoute, deleteKeysIdRouteHandler)
  .openapi(getKeysIdRoute, getKeysIdRouteHandler)
  .openapi(putKeysIdRoute, putKeysIdRouteHandler)
  .openapi(getKvpairsRoute, getKvpairsRouteHandler)
  .openapi(postKvpairsRoute, postKvpairsRouteHandler)
  .openapi(deleteKvpairsIdRoute, deleteKvpairsIdRouteHandler)
  .openapi(getKvpairsIdRoute, getKvpairsIdRouteHandler)
  .openapi(putKvpairsIdRoute, putKvpairsIdRouteHandler)
  .openapi(getLocationrulesRoute, getLocationrulesRouteHandler)
  .openapi(postLocationrulesRoute, postLocationrulesRouteHandler)
  .openapi(deleteLocationrulesIdRoute, deleteLocationrulesIdRouteHandler)
  .openapi(getLocationrulesIdRoute, getLocationrulesIdRouteHandler)
  .openapi(putLocationrulesIdRoute, putLocationrulesIdRouteHandler)
  .openapi(getLocationsRoute, getLocationsRouteHandler)
  .openapi(postLocationsRoute, postLocationsRouteHandler)
  .openapi(deleteLocationsIdRoute, deleteLocationsIdRouteHandler)
  .openapi(getLocationsIdRoute, getLocationsIdRouteHandler)
  .openapi(putLocationsIdRoute, putLocationsIdRouteHandler)
  .openapi(getPresencesRoute, getPresencesRouteHandler)
  .openapi(getPresencesIdRoute, getPresencesIdRouteHandler)
  .openapi(getServicesRoute, getServicesRouteHandler)
  .openapi(getServicesIdRoute, getServicesIdRouteHandler)
  .openapi(putServicesIdRoute, putServicesIdRouteHandler)
  .openapi(getSetsItemlistsRoute, getSetsItemlistsRouteHandler)
  .openapi(postSetsItemlistsRoute, postSetsItemlistsRouteHandler)
  .openapi(deleteSetsItemlistsIdRoute, deleteSetsItemlistsIdRouteHandler)
  .openapi(getSetsItemlistsIdRoute, getSetsItemlistsIdRouteHandler)
  .openapi(putSetsItemlistsIdRoute, putSetsItemlistsIdRouteHandler)
  .openapi(getSetsItemlistsIdIdsRoute, getSetsItemlistsIdIdsRouteHandler)
  .openapi(postSetsItemlistsIdIdsRoute, postSetsItemlistsIdIdsRouteHandler)
  .openapi(deleteSetsItemlistsIdIdsItemIdRoute, deleteSetsItemlistsIdIdsItemIdRouteHandler)
  .openapi(getSetsSpotlistsRoute, getSetsSpotlistsRouteHandler)
  .openapi(postSetsSpotlistsRoute, postSetsSpotlistsRouteHandler)
  .openapi(deleteSetsSpotlistsIdRoute, deleteSetsSpotlistsIdRouteHandler)
  .openapi(getSetsSpotlistsIdRoute, getSetsSpotlistsIdRouteHandler)
  .openapi(putSetsSpotlistsIdRoute, putSetsSpotlistsIdRouteHandler)
  .openapi(getSetsSpotlistsIdIdsRoute, getSetsSpotlistsIdIdsRouteHandler)
  .openapi(postSetsSpotlistsIdIdsRoute, postSetsSpotlistsIdIdsRouteHandler)
  .openapi(deleteSetsSpotlistsIdIdsItemIdRoute, deleteSetsSpotlistsIdIdsItemIdRouteHandler)
  .openapi(getSpotsRoute, getSpotsRouteHandler)
  .openapi(getSpotsIdRoute, getSpotsIdRouteHandler)
  .openapi(putSpotsIdRoute, putSpotsIdRouteHandler)
  .openapi(getSpotsIdSetsRoute, getSpotsIdSetsRouteHandler)
  .openapi(postSpotsIdSetsRoute, postSpotsIdSetsRouteHandler)
  .openapi(getSpotsIdSetsSetIdRoute, getSpotsIdSetsSetIdRouteHandler)
  .openapi(putSpotsIdSetsSetIdRoute, putSpotsIdSetsSetIdRouteHandler)
  .openapi(getSpotsetsRoute, getSpotsetsRouteHandler)
  .openapi(postSpotsetsRoute, postSpotsetsRouteHandler)
  .openapi(getSpotsetsIdRoute, getSpotsetsIdRouteHandler)
  .openapi(putSpotsetsIdRoute, putSpotsetsIdRouteHandler)
  .openapi(getSubscriptionsRoute, getSubscriptionsRouteHandler)
  .openapi(postSubscriptionsRoute, postSubscriptionsRouteHandler)
  .openapi(deleteSubscriptionsIdRoute, deleteSubscriptionsIdRouteHandler)
  .openapi(getSubscriptionsIdRoute, getSubscriptionsIdRouteHandler)
  .openapi(putSubscriptionsIdRoute, putSubscriptionsIdRouteHandler)
  .openapi(getSubscriptionsIdEventsRoute, getSubscriptionsIdEventsRouteHandler)
  .openapi(getUsersRoute, getUsersRouteHandler)
  .openapi(postUsersRoute, postUsersRouteHandler)
  .openapi(deleteUsersIdRoute, deleteUsersIdRouteHandler)
  .openapi(getUsersIdRoute, getUsersIdRouteHandler)
  .openapi(putUsersIdRoute, putUsersIdRouteHandler)

export default app
