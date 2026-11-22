import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachUserPolicyRoute, postActionDetachUserPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDetachUserPolicyHandler = app
  .openapi(getActionDetachUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachUserPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
