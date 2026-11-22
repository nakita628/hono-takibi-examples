import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionModifyTargetGroupRoute, postActionModifyTargetGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionModifyTargetGroupHandler = app
  .openapi(getActionModifyTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTargetGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
