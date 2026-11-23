import { OpenAPIHono } from '@hono/zod-openapi'
import { postListFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const listFleetsHandler = app.openapi(postListFleetsRoute, (c) => {
  throw new Error('Not implemented')
})
