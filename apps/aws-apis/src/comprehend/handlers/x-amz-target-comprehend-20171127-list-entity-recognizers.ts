import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127ListEntityRecognizersRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetComprehend20171127ListEntityRecognizersHandler = app.openapi(
  postXAmzTargetComprehend20171127ListEntityRecognizersRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
