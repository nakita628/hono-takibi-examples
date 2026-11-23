import { OpenAPIHono } from '@hono/zod-openapi'
import { postTravelTripParserRoute } from './routes'
import { postTravelTripParserRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(postTravelTripParserRoute, postTravelTripParserRouteHandler)

export default app
