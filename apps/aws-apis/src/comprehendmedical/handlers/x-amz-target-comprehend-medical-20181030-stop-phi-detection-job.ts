import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StopPHIDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StopPhiDetectionJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StopPHIDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
