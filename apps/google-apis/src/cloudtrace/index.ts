import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2beta1NameRoute,
  getV2beta1NameRoute,
  getV2beta1ParentTraceSinksRoute,
  patchV2beta1NameRoute,
  postV2beta1ParentTraceSinksRoute,
} from './routes'
import {
  deleteV2beta1NameRouteHandler,
  getV2beta1NameRouteHandler,
  getV2beta1ParentTraceSinksRouteHandler,
  patchV2beta1NameRouteHandler,
  postV2beta1ParentTraceSinksRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV2beta1NameRoute, deleteV2beta1NameRouteHandler)
  .openapi(getV2beta1NameRoute, getV2beta1NameRouteHandler)
  .openapi(patchV2beta1NameRoute, patchV2beta1NameRouteHandler)
  .openapi(getV2beta1ParentTraceSinksRoute, getV2beta1ParentTraceSinksRouteHandler)
  .openapi(postV2beta1ParentTraceSinksRoute, postV2beta1ParentTraceSinksRouteHandler)

export default app
