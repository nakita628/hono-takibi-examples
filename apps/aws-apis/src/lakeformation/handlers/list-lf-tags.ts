import { OpenAPIHono } from '@hono/zod-openapi'
import { postListLFTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const listLfTagsHandler = app.openapi(postListLFTagsRoute, (c) => {
  throw new Error('Not implemented')
})
