import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagePackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const ListImagePackagesHandler = app.openapi(postListImagePackagesRoute, (c) => {
  throw new Error('Not implemented')
})
