import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentDevicesRoute,
  getV1ParentRoomsRoute,
  getV1ParentStructuresRoute,
  postV1NameExecuteCommandRoute,
} from './routes'
import {
  getV1NameRouteHandler,
  getV1ParentDevicesRouteHandler,
  getV1ParentRoomsRouteHandler,
  getV1ParentStructuresRouteHandler,
  postV1NameExecuteCommandRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(postV1NameExecuteCommandRoute, postV1NameExecuteCommandRouteHandler)
  .openapi(getV1ParentDevicesRoute, getV1ParentDevicesRouteHandler)
  .openapi(getV1ParentRoomsRoute, getV1ParentRoomsRouteHandler)
  .openapi(getV1ParentStructuresRoute, getV1ParentStructuresRouteHandler)

export default app
