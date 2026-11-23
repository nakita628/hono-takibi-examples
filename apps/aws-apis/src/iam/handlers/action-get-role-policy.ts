import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetRolePolicyRoute, postActionGetRolePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionGetRolePolicyHandler = app
  .openapi(getActionGetRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
