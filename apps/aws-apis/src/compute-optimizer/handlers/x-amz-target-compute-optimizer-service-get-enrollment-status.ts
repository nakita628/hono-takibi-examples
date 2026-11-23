import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComputeOptimizerServiceGetEnrollmentStatusHandler = app.openapi(
  postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
