import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ExploreIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const exploreHandler = app.openapi(getApiV1ExploreIndexRoute, (c) => {
  throw new Error('Not implemented')
})
