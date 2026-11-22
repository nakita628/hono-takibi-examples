import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteUserPolicyRoute, postActionDeleteUserPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteUserPolicyHandler = app
  .openapi(getActionDeleteUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
