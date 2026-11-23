import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDetachRolePolicyRoute, postActionDetachRolePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDetachRolePolicyHandler = app
  .openapi(getActionDetachRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDetachRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
