import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetACMPrivateCAListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetACMPrivateCAListTagsHandler = app.openapi(
  postXAmzTargetACMPrivateCAListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
