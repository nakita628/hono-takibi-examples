import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCopyDBParameterGroupRoute, postActionCopyDBParameterGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const actionCopyDbParameterGroupHandler = app
  .openapi(getActionCopyDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCopyDBParameterGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
