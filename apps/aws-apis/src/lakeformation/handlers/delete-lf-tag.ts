import { OpenAPIHono } from '@hono/zod-openapi'
import { postDeleteLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const deleteLfTagHandler = app.openapi(postDeleteLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
