import { OpenAPIHono } from '@hono/zod-openapi'
import { getFeedsRoute } from '../routes'

const app = new OpenAPIHono()

export const feedsHandler = app.openapi(getFeedsRoute, (c) => {
  throw new Error('Not implemented')
})
