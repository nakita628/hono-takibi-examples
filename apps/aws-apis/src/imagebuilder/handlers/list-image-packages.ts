import { OpenAPIHono } from '@hono/zod-openapi'
import { postListImagePackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const listImagePackagesHandler = app.openapi(postListImagePackagesRoute, (c) => {
  throw new Error('Not implemented')
})
