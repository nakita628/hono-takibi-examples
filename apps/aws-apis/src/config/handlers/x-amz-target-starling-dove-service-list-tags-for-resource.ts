import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStarlingDoveServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStarlingDoveServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetStarlingDoveServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
