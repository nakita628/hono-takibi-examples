import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetAnyScaleFrontendServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetAnyScaleFrontendServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
