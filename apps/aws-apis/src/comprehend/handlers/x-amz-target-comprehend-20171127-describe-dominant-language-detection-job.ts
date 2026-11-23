import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobHandler = app.openapi(
  postXAmzTargetComprehend20171127DescribeDominantLanguageDetectionJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
