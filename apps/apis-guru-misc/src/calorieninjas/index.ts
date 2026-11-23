import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NutritionRoute } from './routes'
import { getV1NutritionRouteHandler } from './handlers'

const app = new OpenAPIHono()

export const api = app.openapi(getV1NutritionRoute, getV1NutritionRouteHandler)

export default app
