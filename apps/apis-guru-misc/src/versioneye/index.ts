import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ScansIdFilesFileIdRoute, getApiV1ScansIdRoute, getApiV1ScansRoute } from './routes'
import {
  getApiV1ScansIdFilesFileIdRouteHandler,
  getApiV1ScansIdRouteHandler,
  getApiV1ScansRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getApiV1ScansRoute, getApiV1ScansRouteHandler)
  .openapi(getApiV1ScansIdRoute, getApiV1ScansIdRouteHandler)
  .openapi(getApiV1ScansIdFilesFileIdRoute, getApiV1ScansIdFilesFileIdRouteHandler)

export default app
