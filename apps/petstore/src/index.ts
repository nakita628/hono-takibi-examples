import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePetPetIdRoute,
  deleteStoreOrderOrderIdRoute,
  deleteUserUsernameRoute,
  getPetFindByStatusRoute,
  getPetFindByTagsRoute,
  getPetPetIdRoute,
  getStoreInventoryRoute,
  getStoreOrderOrderIdRoute,
  getUserLoginRoute,
  getUserLogoutRoute,
  getUserUsernameRoute,
  postPetPetIdRoute,
  postPetPetIdUploadImageRoute,
  postPetRoute,
  postStoreOrderRoute,
  postUserCreateWithListRoute,
  postUserRoute,
  putPetRoute,
  putUserUsernameRoute,
} from './routes'
import {
  deletePetPetIdRouteHandler,
  deleteStoreOrderOrderIdRouteHandler,
  deleteUserUsernameRouteHandler,
  getPetFindByStatusRouteHandler,
  getPetFindByTagsRouteHandler,
  getPetPetIdRouteHandler,
  getStoreInventoryRouteHandler,
  getStoreOrderOrderIdRouteHandler,
  getUserLoginRouteHandler,
  getUserLogoutRouteHandler,
  getUserUsernameRouteHandler,
  postPetPetIdRouteHandler,
  postPetPetIdUploadImageRouteHandler,
  postPetRouteHandler,
  postStoreOrderRouteHandler,
  postUserCreateWithListRouteHandler,
  postUserRouteHandler,
  putPetRouteHandler,
  putUserUsernameRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putPetRoute, putPetRouteHandler)
  .openapi(postPetRoute, postPetRouteHandler)
  .openapi(getPetFindByStatusRoute, getPetFindByStatusRouteHandler)
  .openapi(getPetFindByTagsRoute, getPetFindByTagsRouteHandler)
  .openapi(getPetPetIdRoute, getPetPetIdRouteHandler)
  .openapi(postPetPetIdRoute, postPetPetIdRouteHandler)
  .openapi(deletePetPetIdRoute, deletePetPetIdRouteHandler)
  .openapi(postPetPetIdUploadImageRoute, postPetPetIdUploadImageRouteHandler)
  .openapi(getStoreInventoryRoute, getStoreInventoryRouteHandler)
  .openapi(postStoreOrderRoute, postStoreOrderRouteHandler)
  .openapi(getStoreOrderOrderIdRoute, getStoreOrderOrderIdRouteHandler)
  .openapi(deleteStoreOrderOrderIdRoute, deleteStoreOrderOrderIdRouteHandler)
  .openapi(postUserRoute, postUserRouteHandler)
  .openapi(postUserCreateWithListRoute, postUserCreateWithListRouteHandler)
  .openapi(getUserLoginRoute, getUserLoginRouteHandler)
  .openapi(getUserLogoutRoute, getUserLogoutRouteHandler)
  .openapi(getUserUsernameRoute, getUserUsernameRouteHandler)
  .openapi(putUserUsernameRoute, putUserUsernameRouteHandler)
  .openapi(deleteUserUsernameRoute, deleteUserUsernameRouteHandler)

export default app
