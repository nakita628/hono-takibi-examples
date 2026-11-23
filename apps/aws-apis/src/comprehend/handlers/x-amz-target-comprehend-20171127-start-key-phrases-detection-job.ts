import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartKeyPhrasesDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartKeyPhrasesDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
