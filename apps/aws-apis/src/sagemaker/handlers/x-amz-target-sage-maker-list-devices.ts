import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListDevicesHandler = app.openapi(
  postXAmzTargetSageMakerListDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
