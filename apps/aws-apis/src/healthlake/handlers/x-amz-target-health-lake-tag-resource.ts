import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetHealthLakeTagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetHealthLakeTagResourceHandler = app.openapi(
  postXAmzTargetHealthLakeTagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
