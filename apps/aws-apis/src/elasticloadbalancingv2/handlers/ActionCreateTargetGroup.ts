import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionCreateTargetGroupRoute, postActionCreateTargetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionCreateTargetGroupHandler = app
  .openapi(getActionCreateTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionCreateTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
