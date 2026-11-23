import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030ListPHIDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030ListPhiDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030ListPHIDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
