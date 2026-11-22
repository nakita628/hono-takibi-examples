import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeUntagResourceHandler = app.openapi(
  postXAmzTargetHealthLakeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
