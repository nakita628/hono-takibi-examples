import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030StartPHIDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030StartPHIDetectionJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030StartPHIDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
