import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutUserPolicyRoute, postActionPutUserPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionPutUserPolicyHandler = app
  .openapi(getActionPutUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
