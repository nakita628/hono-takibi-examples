import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteGroupPolicyRoute, postActionDeleteGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteGroupPolicyHandler = app
  .openapi(getActionDeleteGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
