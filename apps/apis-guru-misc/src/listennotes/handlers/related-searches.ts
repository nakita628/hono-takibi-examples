import { OpenAPIHono } from '@hono/zod-openapi'
import { getRelatedSearchesRoute } from '../routes'

const app = new OpenAPIHono()

export const relatedSearchesHandler = app.openapi(getRelatedSearchesRoute, (c) => {
  throw new Error('Not implemented')
})
