import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteRolePolicyRoute, postActionDeleteRolePolicyRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteRolePolicyHandler = app
  .openapi(getActionDeleteRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteRolePolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
