import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyOptionGroupRoute, postActionCopyOptionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCopyOptionGroupHandler = app
  .openapi(getActionCopyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
