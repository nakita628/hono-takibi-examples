import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetHealthLakeTagResourceHandler = app.openapi(
  postXAmzTargetHealthLakeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
