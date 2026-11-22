import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteIdentityPolicyRoute, postActionDeleteIdentityPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteIdentityPolicyHandler = app
  .openapi(getActionDeleteIdentityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteIdentityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
