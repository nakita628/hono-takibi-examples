import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutIdentityPolicyRoute, postActionPutIdentityPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutIdentityPolicyHandler = app
  .openapi(getActionPutIdentityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutIdentityPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
