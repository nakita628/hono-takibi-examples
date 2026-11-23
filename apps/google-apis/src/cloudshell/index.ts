import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  postV1EnvironmentAddPublicKeyRoute,
  postV1EnvironmentRemovePublicKeyRoute,
  postV1NameAuthorizeRoute,
  postV1NameCancelRoute,
  postV1NameStartRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  postV1EnvironmentAddPublicKeyRouteHandler,
  postV1EnvironmentRemovePublicKeyRouteHandler,
  postV1NameAuthorizeRouteHandler,
  postV1NameCancelRouteHandler,
  postV1NameStartRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1EnvironmentAddPublicKeyRoute, postV1EnvironmentAddPublicKeyRouteHandler)
  .openapi(postV1EnvironmentRemovePublicKeyRoute, postV1EnvironmentRemovePublicKeyRouteHandler)
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameAuthorizeRoute, postV1NameAuthorizeRouteHandler)
  .openapi(postV1NameCancelRoute, postV1NameCancelRouteHandler)
  .openapi(postV1NameStartRoute, postV1NameStartRouteHandler)

export default app
