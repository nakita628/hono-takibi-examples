import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionAttachRolePolicyRoute, postActionAttachRolePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionAttachRolePolicyHandler = app
  .openapi(getActionAttachRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionAttachRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
