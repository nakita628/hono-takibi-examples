import { OpenAPIHono } from '@hono/zod-openapi'
import { getPrivilegeRoute } from '../routes'

const app = new OpenAPIHono()

export const privilegeHandler = app.openapi(getPrivilegeRoute, (c) => {
  throw new Error('Not implemented')
})
