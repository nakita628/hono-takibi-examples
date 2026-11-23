import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchDatabasesByLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const searchDatabasesByLfTagsHandler = app.openapi(postSearchDatabasesByLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
