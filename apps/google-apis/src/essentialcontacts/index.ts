import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1NameRoute,
  getV1NameRoute,
  getV1ParentContactsComputeRoute,
  getV1ParentContactsRoute,
  patchV1NameRoute,
  postV1ParentContactsRoute,
  postV1ResourceContactsSendTestMessageRoute,
} from './routes'
import {
  deleteV1NameRouteHandler,
  getV1NameRouteHandler,
  getV1ParentContactsComputeRouteHandler,
  getV1ParentContactsRouteHandler,
  patchV1NameRouteHandler,
  postV1ParentContactsRouteHandler,
  postV1ResourceContactsSendTestMessageRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1NameRoute, deleteV1NameRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(patchV1NameRoute, patchV1NameRouteHandler)
  .openapi(getV1ParentContactsRoute, getV1ParentContactsRouteHandler)
  .openapi(postV1ParentContactsRoute, postV1ParentContactsRouteHandler)
  .openapi(getV1ParentContactsComputeRoute, getV1ParentContactsComputeRouteHandler)
  .openapi(
    postV1ResourceContactsSendTestMessageRoute,
    postV1ResourceContactsSendTestMessageRouteHandler,
  )

export default app
