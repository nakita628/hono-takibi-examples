import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateRoleRoute, postActionCreateRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateRoleHandler = app
  .openapi(getActionCreateRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
