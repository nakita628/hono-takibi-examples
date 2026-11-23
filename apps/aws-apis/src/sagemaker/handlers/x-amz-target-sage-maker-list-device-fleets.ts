import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDeviceFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListDeviceFleetsHandler = app.openapi(
  postXAmzTargetSageMakerListDeviceFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
