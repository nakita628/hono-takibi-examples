import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706ListTagsForResourceHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706ListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
