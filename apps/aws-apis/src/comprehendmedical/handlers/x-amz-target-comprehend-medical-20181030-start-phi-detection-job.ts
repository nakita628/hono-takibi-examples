import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartPHIDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehendMedical20181030StartPhiDetectionJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartPHIDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
