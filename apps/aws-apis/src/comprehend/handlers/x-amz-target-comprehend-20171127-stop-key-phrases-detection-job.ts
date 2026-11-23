import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StopKeyPhrasesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopKeyPhrasesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
