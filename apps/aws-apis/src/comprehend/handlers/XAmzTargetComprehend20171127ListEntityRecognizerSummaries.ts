import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListEntityRecognizerSummariesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127ListEntityRecognizerSummariesHandler = app.openapi(
  postXAmzTargetComprehend20171127ListEntityRecognizerSummariesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
