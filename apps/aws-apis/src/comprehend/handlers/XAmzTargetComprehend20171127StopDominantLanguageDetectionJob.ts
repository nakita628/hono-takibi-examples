import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127StopDominantLanguageDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127StopDominantLanguageDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127StopDominantLanguageDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
