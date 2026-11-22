import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127CreateEntityRecognizerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127CreateEntityRecognizerHandler = app.openapi(
  postXAmzTargetComprehend20171127CreateEntityRecognizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
