import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceUpdateEnrollmentStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
