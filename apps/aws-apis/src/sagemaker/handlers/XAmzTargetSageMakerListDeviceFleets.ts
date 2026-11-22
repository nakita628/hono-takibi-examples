import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDeviceFleetsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListDeviceFleetsHandler = app.openapi(
  postXAmzTargetSageMakerListDeviceFleetsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
