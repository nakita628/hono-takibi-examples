import { OpenAPIHono } from '@hono/zod-openapi'
import { postListLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListLFTagsHandler = app.openapi(postListLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
