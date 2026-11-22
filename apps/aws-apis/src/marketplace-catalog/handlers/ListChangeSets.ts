import { OpenAPIHono } from '@hono/zod-openapi'
import { postListChangeSetsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListChangeSetsHandler = app.openapi(postListChangeSetsRoute, (c) => {
  throw new Error('Not implemented')
})
