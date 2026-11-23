import { OpenAPIHono } from '@hono/zod-openapi'
import { postCrossBorderInvoicesRoute } from './routes'
import { postCrossBorderInvoicesRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postCrossBorderInvoicesRoute, postCrossBorderInvoicesRouteHandler)

export default app
