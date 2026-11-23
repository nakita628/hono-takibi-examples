import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKkidChorelistRoute,
  deleteKkidUserlistRoute,
  deleteKkidWishlistRoute,
  getAuthenticationAuthkeyRoute,
  getAuthenticationVerifyotpRoute,
  getAuthkeyRoute,
  getKkidAllowanceRoute,
  getKkidChorelistRoute,
  getKkidShareRoute,
  getKkidUserlistRoute,
  getKkidUserRoute,
  getKkidWishlistRoute,
  patchAppkeyRoute,
  patchAuthenticationAppkeyRoute,
  patchAuthenticationAuthkeyRoute,
  patchAuthkeyRoute,
  postAppkeyRoute,
  postAuthenticationAppkeyRoute,
  postAuthenticationAuthkeyRoute,
  postAuthkeyRoute,
  postKkidAllowanceRoute,
  postKkidApnsRoute,
  postKkidChorelistRoute,
  postKkidMasteruserRoute,
  postKkidUserlistRoute,
  postKkidWishlistRoute,
  putAppkeyRoute,
  putAuthenticationAppkeyRoute,
  putAuthenticationAuthkeyRoute,
  putAuthkeyRoute,
  putKkidChorelistRoute,
  putKkidUserlistRoute,
  putKkidWishlistRoute,
} from './routes'
import {
  deleteKkidChorelistRouteHandler,
  deleteKkidUserlistRouteHandler,
  deleteKkidWishlistRouteHandler,
  getAuthenticationAuthkeyRouteHandler,
  getAuthenticationVerifyotpRouteHandler,
  getAuthkeyRouteHandler,
  getKkidAllowanceRouteHandler,
  getKkidChorelistRouteHandler,
  getKkidShareRouteHandler,
  getKkidUserlistRouteHandler,
  getKkidUserRouteHandler,
  getKkidWishlistRouteHandler,
  patchAppkeyRouteHandler,
  patchAuthenticationAppkeyRouteHandler,
  patchAuthenticationAuthkeyRouteHandler,
  patchAuthkeyRouteHandler,
  postAppkeyRouteHandler,
  postAuthenticationAppkeyRouteHandler,
  postAuthenticationAuthkeyRouteHandler,
  postAuthkeyRouteHandler,
  postKkidAllowanceRouteHandler,
  postKkidApnsRouteHandler,
  postKkidChorelistRouteHandler,
  postKkidMasteruserRouteHandler,
  postKkidUserlistRouteHandler,
  postKkidWishlistRouteHandler,
  putAppkeyRouteHandler,
  putAuthenticationAppkeyRouteHandler,
  putAuthenticationAuthkeyRouteHandler,
  putAuthkeyRouteHandler,
  putKkidChorelistRouteHandler,
  putKkidUserlistRouteHandler,
  putKkidWishlistRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(patchAppkeyRoute, patchAppkeyRouteHandler)
  .openapi(postAppkeyRoute, postAppkeyRouteHandler)
  .openapi(putAppkeyRoute, putAppkeyRouteHandler)
  .openapi(patchAuthenticationAppkeyRoute, patchAuthenticationAppkeyRouteHandler)
  .openapi(postAuthenticationAppkeyRoute, postAuthenticationAppkeyRouteHandler)
  .openapi(putAuthenticationAppkeyRoute, putAuthenticationAppkeyRouteHandler)
  .openapi(getAuthenticationAuthkeyRoute, getAuthenticationAuthkeyRouteHandler)
  .openapi(patchAuthenticationAuthkeyRoute, patchAuthenticationAuthkeyRouteHandler)
  .openapi(postAuthenticationAuthkeyRoute, postAuthenticationAuthkeyRouteHandler)
  .openapi(putAuthenticationAuthkeyRoute, putAuthenticationAuthkeyRouteHandler)
  .openapi(getAuthenticationVerifyotpRoute, getAuthenticationVerifyotpRouteHandler)
  .openapi(getAuthkeyRoute, getAuthkeyRouteHandler)
  .openapi(patchAuthkeyRoute, patchAuthkeyRouteHandler)
  .openapi(postAuthkeyRoute, postAuthkeyRouteHandler)
  .openapi(putAuthkeyRoute, putAuthkeyRouteHandler)
  .openapi(getKkidAllowanceRoute, getKkidAllowanceRouteHandler)
  .openapi(postKkidAllowanceRoute, postKkidAllowanceRouteHandler)
  .openapi(postKkidApnsRoute, postKkidApnsRouteHandler)
  .openapi(deleteKkidChorelistRoute, deleteKkidChorelistRouteHandler)
  .openapi(getKkidChorelistRoute, getKkidChorelistRouteHandler)
  .openapi(postKkidChorelistRoute, postKkidChorelistRouteHandler)
  .openapi(putKkidChorelistRoute, putKkidChorelistRouteHandler)
  .openapi(postKkidMasteruserRoute, postKkidMasteruserRouteHandler)
  .openapi(getKkidShareRoute, getKkidShareRouteHandler)
  .openapi(getKkidUserRoute, getKkidUserRouteHandler)
  .openapi(deleteKkidUserlistRoute, deleteKkidUserlistRouteHandler)
  .openapi(getKkidUserlistRoute, getKkidUserlistRouteHandler)
  .openapi(postKkidUserlistRoute, postKkidUserlistRouteHandler)
  .openapi(putKkidUserlistRoute, putKkidUserlistRouteHandler)
  .openapi(deleteKkidWishlistRoute, deleteKkidWishlistRouteHandler)
  .openapi(getKkidWishlistRoute, getKkidWishlistRouteHandler)
  .openapi(postKkidWishlistRoute, postKkidWishlistRouteHandler)
  .openapi(putKkidWishlistRoute, putKkidWishlistRouteHandler)

export default app
