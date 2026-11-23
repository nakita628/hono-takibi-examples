import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCrmObjectLibrary202609EnablementObjectTypeIdRoute,
  getCrmObjectLibrary202609EnablementRoute,
} from './routes'
import {
  getCrmObjectLibrary202609EnablementObjectTypeIdRouteHandler,
  getCrmObjectLibrary202609EnablementRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getCrmObjectLibrary202609EnablementRoute,
    getCrmObjectLibrary202609EnablementRouteHandler,
  )
  .openapi(
    getCrmObjectLibrary202609EnablementObjectTypeIdRoute,
    getCrmObjectLibrary202609EnablementObjectTypeIdRouteHandler,
  )

export default app
