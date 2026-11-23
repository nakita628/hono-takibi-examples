import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreatePolicyVersionRoute, postActionCreatePolicyVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreatePolicyVersionHandler = app
  .openapi(getActionCreatePolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
