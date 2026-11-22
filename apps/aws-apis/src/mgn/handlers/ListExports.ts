import { OpenAPIHono } from '@hono/zod-openapi'
import { postListExportsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListExportsHandler = app.openapi(postListExportsRoute, (c) => {
  throw new Error('Not implemented')
})
