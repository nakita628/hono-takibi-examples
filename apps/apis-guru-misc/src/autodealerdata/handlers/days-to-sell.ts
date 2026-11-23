import { OpenAPIHono } from '@hono/zod-openapi'
import { getDaysToSellRoute } from '../routes'

const app = new OpenAPIHono()

export const daysToSellHandler = app.openapi(getDaysToSellRoute, (c) => {
  throw new Error('Not implemented')
})
