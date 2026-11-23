import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
  deleteEvents202609EventDefinitionsEventNameRoute,
  getEvents202609EventDefinitionsEventNameRoute,
  getEvents202609EventDefinitionsRoute,
  patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
  patchEvents202609EventDefinitionsEventNameRoute,
  postEvents202609EventDefinitionsEventNamePropertyRoute,
  postEvents202609EventDefinitionsRoute,
  postEvents202609SendBatchRoute,
} from './routes'
import {
  deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRouteHandler,
  deleteEvents202609EventDefinitionsEventNameRouteHandler,
  getEvents202609EventDefinitionsEventNameRouteHandler,
  getEvents202609EventDefinitionsRouteHandler,
  patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRouteHandler,
  patchEvents202609EventDefinitionsEventNameRouteHandler,
  postEvents202609EventDefinitionsEventNamePropertyRouteHandler,
  postEvents202609EventDefinitionsRouteHandler,
  postEvents202609SendBatchRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getEvents202609EventDefinitionsRoute, getEvents202609EventDefinitionsRouteHandler)
  .openapi(postEvents202609EventDefinitionsRoute, postEvents202609EventDefinitionsRouteHandler)
  .openapi(
    getEvents202609EventDefinitionsEventNameRoute,
    getEvents202609EventDefinitionsEventNameRouteHandler,
  )
  .openapi(
    deleteEvents202609EventDefinitionsEventNameRoute,
    deleteEvents202609EventDefinitionsEventNameRouteHandler,
  )
  .openapi(
    patchEvents202609EventDefinitionsEventNameRoute,
    patchEvents202609EventDefinitionsEventNameRouteHandler,
  )
  .openapi(
    postEvents202609EventDefinitionsEventNamePropertyRoute,
    postEvents202609EventDefinitionsEventNamePropertyRouteHandler,
  )
  .openapi(
    deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
    deleteEvents202609EventDefinitionsEventNamePropertyPropertyNameRouteHandler,
  )
  .openapi(
    patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRoute,
    patchEvents202609EventDefinitionsEventNamePropertyPropertyNameRouteHandler,
  )
  .openapi(postEvents202609SendBatchRoute, postEvents202609SendBatchRouteHandler)

export default app
