import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachGroupPolicyRoute, postActionDetachGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachGroupPolicyHandler = app
  .openapi(getActionDetachGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
