import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetWorkMailServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
