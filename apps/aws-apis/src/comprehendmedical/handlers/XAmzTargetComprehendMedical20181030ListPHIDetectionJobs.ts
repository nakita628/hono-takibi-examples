import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListPHIDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030ListPHIDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListPHIDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
