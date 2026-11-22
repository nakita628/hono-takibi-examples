import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetBaldrApiServiceListTagsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetBaldrApiServiceListTagsHandler = app.openapi(
  postXAmzTargetBaldrApiServiceListTagsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
