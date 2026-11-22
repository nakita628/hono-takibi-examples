import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRoleRoute, postActionDeleteRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteRoleHandler = app
  .openapi(getActionDeleteRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
