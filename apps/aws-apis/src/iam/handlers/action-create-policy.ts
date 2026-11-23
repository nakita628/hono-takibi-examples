import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreatePolicyRoute, postActionCreatePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCreatePolicyHandler = app
  .openapi(getActionCreatePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreatePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
