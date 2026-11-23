import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeUntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeUntagResourceHandler = app.openapi(
  postXAmzTargetHealthLakeUntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
