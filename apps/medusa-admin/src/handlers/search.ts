import { OpenAPIHono } from '@hono/zod-openapi'
import { getAdminSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const searchHandler = app.openapi(getAdminSearchRoute, (c) => {
  throw new Error('Not implemented')
})
