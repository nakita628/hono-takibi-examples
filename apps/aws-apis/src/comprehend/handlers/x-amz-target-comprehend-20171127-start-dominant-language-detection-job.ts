import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StartDominantLanguageDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127StartDominantLanguageDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StartDominantLanguageDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
