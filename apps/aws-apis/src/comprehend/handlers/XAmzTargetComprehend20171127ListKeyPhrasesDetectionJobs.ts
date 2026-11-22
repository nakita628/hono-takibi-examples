import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListKeyPhrasesDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
