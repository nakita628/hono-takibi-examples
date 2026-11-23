import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionTagPolicyRoute, postActionTagPolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionTagPolicyHandler = app
  .openapi(getActionTagPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionTagPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
