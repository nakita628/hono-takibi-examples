import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetComprehend20171127DeleteEntityRecognizerRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetComprehend20171127DeleteEntityRecognizerHandler = app.openapi(
  postXAmzTargetComprehend20171127DeleteEntityRecognizerRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
