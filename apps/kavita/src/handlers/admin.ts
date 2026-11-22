import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdminExistsRoute } from '../routes'

const app = new OpenAPIHono()

export const adminHandler = app.openapi(getApiAdminExistsRoute, (c) => {
  throw new Error('Not implemented')
})
