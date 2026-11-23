import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachGroupPolicyRoute, postActionAttachGroupPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionAttachGroupPolicyHandler = app
  .openapi(getActionAttachGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachGroupPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
