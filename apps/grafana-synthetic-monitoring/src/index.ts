import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecretsIdRoute,
  getSecretsFindByLabelsRoute,
  getSecretsIdDecryptRoute,
  getSecretsIdRoute,
  getSecretsRoute,
  postSecretsRoute,
  putSecretsIdRoute,
} from './routes'
import {
  deleteSecretsIdRouteHandler,
  getSecretsFindByLabelsRouteHandler,
  getSecretsIdDecryptRouteHandler,
  getSecretsIdRouteHandler,
  getSecretsRouteHandler,
  postSecretsRouteHandler,
  putSecretsIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getSecretsRoute, getSecretsRouteHandler)
  .openapi(postSecretsRoute, postSecretsRouteHandler)
  .openapi(getSecretsFindByLabelsRoute, getSecretsFindByLabelsRouteHandler)
  .openapi(getSecretsIdRoute, getSecretsIdRouteHandler)
  .openapi(putSecretsIdRoute, putSecretsIdRouteHandler)
  .openapi(deleteSecretsIdRoute, deleteSecretsIdRouteHandler)
  .openapi(getSecretsIdDecryptRoute, getSecretsIdDecryptRouteHandler)

export default app
