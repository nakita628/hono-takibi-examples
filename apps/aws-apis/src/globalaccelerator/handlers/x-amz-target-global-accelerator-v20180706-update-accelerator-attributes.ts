import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesHandler = app.openapi(
  postXAmzTargetGlobalAcceleratorV20180706UpdateAcceleratorAttributesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
