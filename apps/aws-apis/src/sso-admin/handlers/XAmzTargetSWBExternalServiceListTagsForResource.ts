import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
