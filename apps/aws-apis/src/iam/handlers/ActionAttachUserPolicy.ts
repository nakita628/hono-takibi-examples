import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachUserPolicyRoute, postActionAttachUserPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachUserPolicyHandler = app
  .openapi(getActionAttachUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
