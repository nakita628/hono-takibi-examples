import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiMessageMessageAnnunciatorCurrentRoute,
  getApiMessageMessageAnnunciatorDateRoute,
} from './routes'
import {
  getApiMessageMessageAnnunciatorCurrentRouteHandler,
  getApiMessageMessageAnnunciatorDateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getApiMessageMessageAnnunciatorCurrentRoute,
    getApiMessageMessageAnnunciatorCurrentRouteHandler,
  )
  .openapi(
    getApiMessageMessageAnnunciatorDateRoute,
    getApiMessageMessageAnnunciatorDateRouteHandler,
  )

export default app
