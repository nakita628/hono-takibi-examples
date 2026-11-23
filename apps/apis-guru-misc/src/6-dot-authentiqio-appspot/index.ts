import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteKeyPKRoute,
  deleteKeyRoute,
  deleteScopeJobRoute,
  getKeyPKRoute,
  getScopeJobRoute,
  headKeyPKRoute,
  headScopeJobRoute,
  postKeyPKRoute,
  postKeyRoute,
  postLoginRoute,
  postScopeJobRoute,
  postScopeRoute,
  putKeyPKRoute,
  putScopeJobRoute,
} from './routes'
import {
  deleteKeyPKRouteHandler,
  deleteKeyRouteHandler,
  deleteScopeJobRouteHandler,
  getKeyPKRouteHandler,
  getScopeJobRouteHandler,
  headKeyPKRouteHandler,
  headScopeJobRouteHandler,
  postKeyPKRouteHandler,
  postKeyRouteHandler,
  postLoginRouteHandler,
  postScopeJobRouteHandler,
  postScopeRouteHandler,
  putKeyPKRouteHandler,
  putScopeJobRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteKeyRoute, deleteKeyRouteHandler)
  .openapi(postKeyRoute, postKeyRouteHandler)
  .openapi(deleteKeyPKRoute, deleteKeyPKRouteHandler)
  .openapi(getKeyPKRoute, getKeyPKRouteHandler)
  .openapi(headKeyPKRoute, headKeyPKRouteHandler)
  .openapi(postKeyPKRoute, postKeyPKRouteHandler)
  .openapi(putKeyPKRoute, putKeyPKRouteHandler)
  .openapi(postLoginRoute, postLoginRouteHandler)
  .openapi(postScopeRoute, postScopeRouteHandler)
  .openapi(deleteScopeJobRoute, deleteScopeJobRouteHandler)
  .openapi(getScopeJobRoute, getScopeJobRouteHandler)
  .openapi(headScopeJobRoute, headScopeJobRouteHandler)
  .openapi(postScopeJobRoute, postScopeJobRouteHandler)
  .openapi(putScopeJobRoute, putScopeJobRouteHandler)

export default app
