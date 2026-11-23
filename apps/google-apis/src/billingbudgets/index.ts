import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameRoute,
  getV1beta1ParentBudgetsRoute,
  patchV1beta1NameRoute,
  postV1beta1ParentBudgetsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentBudgetsRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1ParentBudgetsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1ParentBudgetsRoute, getV1beta1ParentBudgetsRouteHandler)
  .openapi(postV1beta1ParentBudgetsRoute, postV1beta1ParentBudgetsRouteHandler)

export default app
