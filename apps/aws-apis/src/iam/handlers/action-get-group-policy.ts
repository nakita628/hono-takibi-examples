import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetGroupPolicyRoute, postActionGetGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetGroupPolicyHandler = app
  .openapi(getActionGetGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
