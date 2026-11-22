import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionPutRolePolicyRoute, postActionPutRolePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionPutRolePolicyHandler = app
  .openapi(getActionPutRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionPutRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
