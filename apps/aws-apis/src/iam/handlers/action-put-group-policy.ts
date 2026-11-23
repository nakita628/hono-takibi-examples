import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutGroupPolicyRoute, postActionPutGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutGroupPolicyHandler = app
  .openapi(getActionPutGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
