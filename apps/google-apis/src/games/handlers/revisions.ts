import { OpenAPIHono } from '@hono/zod-openapi'
import { getGamesV1RevisionsCheckRoute } from '../routes'

const app = new OpenAPIHono()

export const revisionsHandler = app.openapi(getGamesV1RevisionsCheckRoute, (c) => {
  throw new Error('Not implemented')
})
