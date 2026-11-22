import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceTagResourceHandler = app.openapi(
  postXAmzTargetSWBExternalServiceTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
