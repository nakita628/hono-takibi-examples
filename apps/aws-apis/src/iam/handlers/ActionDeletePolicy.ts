import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePolicyRoute, postActionDeletePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePolicyHandler = app
  .openapi(getActionDeletePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
