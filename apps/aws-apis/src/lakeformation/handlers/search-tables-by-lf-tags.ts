import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchTablesByLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchTablesByLfTagsHandler = app.openapi(postSearchTablesByLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
