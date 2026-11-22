import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationHandler =
  app.openapi(
    postXAmzTargetComputeOptimizerServiceGetEnrollmentStatusesForOrganizationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
