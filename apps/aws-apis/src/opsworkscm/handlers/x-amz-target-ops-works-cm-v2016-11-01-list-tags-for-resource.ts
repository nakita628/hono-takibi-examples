import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetOpsWorksCMV20161101ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetOpsWorksCmV20161101ListTagsForResourceHandler = app.openapi(
  postXAmzTargetOpsWorksCMV20161101ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
