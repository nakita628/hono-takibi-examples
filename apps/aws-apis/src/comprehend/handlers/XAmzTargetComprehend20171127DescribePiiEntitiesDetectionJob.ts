import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribePiiEntitiesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
