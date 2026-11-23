import { OpenAPIHono } from '@hono/zod-openapi'
import { postListComponentsRoute } from '../routes'

const app = new OpenAPIHono()

export const listComponentsHandler = app.openapi(postListComponentsRoute, (c) => {
  throw new Error('Not implemented')
})
