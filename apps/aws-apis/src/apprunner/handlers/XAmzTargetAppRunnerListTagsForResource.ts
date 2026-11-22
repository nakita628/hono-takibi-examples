import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAppRunnerListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAppRunnerListTagsForResourceHandler = app.openapi(
  postXAmzTargetAppRunnerListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
