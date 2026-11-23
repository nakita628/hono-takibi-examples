import { OpenAPIHono } from '@hono/zod-openapi'
import { postListChangeSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const listChangeSetsHandler = app.openapi(postListChangeSetsRoute, (c) => {
  throw new Error('Not implemented')
})
