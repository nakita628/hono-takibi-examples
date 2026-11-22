import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyOptionGroupRoute, postActionCopyOptionGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCopyOptionGroupHandler = app
  .openapi(getActionCopyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyOptionGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
