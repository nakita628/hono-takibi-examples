import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListDominantLanguageDetectionJobsHandler = app.openapi(
  postXAmzTargetComprehend20171127ListDominantLanguageDetectionJobsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
