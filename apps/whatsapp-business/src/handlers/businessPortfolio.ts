import { OpenAPIHono } from '@hono/zod-openapi'
import { getVersionBusinessIDRoute } from '../routes'

const app = new OpenAPIHono()

export const businessPortfolioHandler = app.openapi(getVersionBusinessIDRoute, (c) => {
  throw new Error('Not implemented')
})
