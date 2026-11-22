import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeletePolicyVersionRoute, postActionDeletePolicyVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeletePolicyVersionHandler = app
  .openapi(getActionDeletePolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeletePolicyVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
