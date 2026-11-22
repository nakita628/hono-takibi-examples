import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceUntagResourceHandler = app.openapi(
  postXAmzTargetSWBExternalServiceUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
