import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerRegisterDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerRegisterDevicesHandler = app.openapi(
  postXAmzTargetSageMakerRegisterDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
