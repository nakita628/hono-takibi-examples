import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagRoleRoute, postActionTagRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagRoleHandler = app
  .openapi(getActionTagRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
