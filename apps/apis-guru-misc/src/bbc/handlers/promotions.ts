import { OpenAPIHono } from '@hono/zod-openapi'
import { getPromotionsRoute } from '../routes'

const app = new OpenAPIHono()

export const promotionsHandler = app.openapi(getPromotionsRoute, (c) => {
  throw new Error('Not implemented')
})
