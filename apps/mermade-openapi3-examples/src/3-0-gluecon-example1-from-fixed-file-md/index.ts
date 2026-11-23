import { OpenAPIHono } from '@hono/zod-openapi'
import { putFilesFilenameRoute } from './routes'
import { putFilesFilenameRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(putFilesFilenameRoute, putFilesFilenameRouteHandler)

export default app
