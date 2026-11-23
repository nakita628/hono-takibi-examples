import { OpenAPIHono } from '@hono/zod-openapi'
import { postPerfectpdfApiRoute } from '../routes'

const app = new OpenAPIHono()

export const perfectpdfHandler = app.openapi(postPerfectpdfApiRoute, (c) => {
  throw new Error('Not implemented')
})
