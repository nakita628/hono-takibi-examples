import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminTeamsCreateRoute } from '../routes'

const app = new OpenAPIHono()

export const adminTeamsCreateHandler = app.openapi(postAdminTeamsCreateRoute, (c) => {
  throw new Error('Not implemented')
})
