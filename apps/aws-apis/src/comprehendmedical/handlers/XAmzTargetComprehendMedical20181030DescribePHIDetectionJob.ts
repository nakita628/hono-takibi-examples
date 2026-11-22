import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehendMedical20181030DescribePHIDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehendMedical20181030DescribePHIDetectionJobHandler = app.openapi(
  postXAmzTargetComprehendMedical20181030DescribePHIDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
