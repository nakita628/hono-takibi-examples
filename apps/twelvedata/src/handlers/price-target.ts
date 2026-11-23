import { OpenAPIHono } from '@hono/zod-openapi'
import { getPriceTargetRoute } from '../routes'

const app = new OpenAPIHono()

export const priceTargetHandler = app.openapi(getPriceTargetRoute, (c) => {
  throw new Error('Not implemented')
})
