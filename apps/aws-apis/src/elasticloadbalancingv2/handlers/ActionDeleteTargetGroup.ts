import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionDeleteTargetGroupRoute, postActionDeleteTargetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionDeleteTargetGroupHandler = app
  .openapi(getActionDeleteTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionDeleteTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
