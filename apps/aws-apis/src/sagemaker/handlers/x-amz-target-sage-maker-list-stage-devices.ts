import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListStageDevicesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListStageDevicesHandler = app.openapi(
  postXAmzTargetSageMakerListStageDevicesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
