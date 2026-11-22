import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSWBExternalServiceListInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSWBExternalServiceListInstancesHandler = app.openapi(
  postXAmzTargetSWBExternalServiceListInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
