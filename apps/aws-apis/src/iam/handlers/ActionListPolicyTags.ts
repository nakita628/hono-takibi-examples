import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionListPolicyTagsRoute, postActionListPolicyTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionListPolicyTagsHandler = app
  .openapi(getActionListPolicyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionListPolicyTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
