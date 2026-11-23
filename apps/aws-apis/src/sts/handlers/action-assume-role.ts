import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAssumeRoleRoute, postActionAssumeRoleRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAssumeRoleHandler = app
  .openapi(getActionAssumeRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAssumeRoleRoute, (c) => {
    throw new Error('Not implemented')
  })
