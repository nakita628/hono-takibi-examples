import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UntagResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706UntagResourceHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UntagResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
