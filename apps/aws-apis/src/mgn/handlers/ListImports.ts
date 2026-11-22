import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImportsRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImportsHandler = app.openapi(postListImportsRoute, (c) => {
  throw new Error('Not implemented')
})
