import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1NutritionRoute } from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app.openapi(getV1NutritionRoute, (c) => {
  throw new Error('Not implemented')
})
