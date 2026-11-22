import { OpenAPIHono } from '@hono/zod-openapi'
import { postAdminOrderChangesIdRoute } from '../routes'

const app = new OpenAPIHono()

export const orderChangesHandler = app.openapi(postAdminOrderChangesIdRoute, (c) => {
  throw new Error('Not implemented')
})
