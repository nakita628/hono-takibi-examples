import { OpenAPIHono } from '@hono/zod-openapi'
import { postSearchTablesByLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const SearchTablesByLFTagsHandler = app.openapi(postSearchTablesByLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
