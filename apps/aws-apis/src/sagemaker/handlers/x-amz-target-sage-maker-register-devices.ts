import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerRegisterDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerRegisterDevicesHandler = app.openapi(
  postXAmzTargetSageMakerRegisterDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
