import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1AppsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(postV1AppsRoute, (c) => {
  throw new Error('Not implemented')
})
