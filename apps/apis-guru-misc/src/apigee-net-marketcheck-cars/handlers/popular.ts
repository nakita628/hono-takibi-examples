import { OpenAPIHono } from '@hono/zod-openapi'
import { getPopularCarsRoute } from '../routes'

const app = new OpenAPIHono()

export const popularHandler = app.openapi(getPopularCarsRoute, (c) => {
  throw new Error('Not implemented')
})
