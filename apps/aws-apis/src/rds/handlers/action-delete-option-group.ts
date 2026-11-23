import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteOptionGroupRoute, postActionDeleteOptionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionDeleteOptionGroupHandler = app
  .openapi(getActionDeleteOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
