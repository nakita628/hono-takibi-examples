import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionModifyTargetGroupAttributesRoute,
  postActionModifyTargetGroupAttributesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actionModifyTargetGroupAttributesHandler = app
  .openapi(getActionModifyTargetGroupAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionModifyTargetGroupAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
