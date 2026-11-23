import { OpenAPIHono } from '@hono/zod-openapi'
import { postListEventTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const listEventTypesHandler = app.openapi(postListEventTypesRoute, (c) => {
  throw new Error('Not implemented')
})
