import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyOptionGroupRoute, postActionModifyOptionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyOptionGroupHandler = app
  .openapi(getActionModifyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
