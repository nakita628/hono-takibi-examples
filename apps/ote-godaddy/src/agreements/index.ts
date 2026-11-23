import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1AgreementsRoute } from './routes'
import { getV1AgreementsRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1AgreementsRoute, getV1AgreementsRouteHandler)

export default app
