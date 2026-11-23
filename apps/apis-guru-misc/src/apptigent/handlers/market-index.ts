import { OpenAPIHono } from '@hono/zod-openapi'
import { postMarketIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const marketIndexHandler = app.openapi(postMarketIndexRoute, (c) => {
  throw new Error('Not implemented')
})
