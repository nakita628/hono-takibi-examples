import { OpenAPIHono } from '@hono/zod-openapi'
import { getRepositorySearchTypeFeedRoute } from '../routes'

const app = new OpenAPIHono()

export const typeFeedHandler = app.openapi(getRepositorySearchTypeFeedRoute, (c) => {
  throw new Error('Not implemented')
})
