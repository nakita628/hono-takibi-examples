import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerGetDeviceFleetReportRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerGetDeviceFleetReportHandler = app.openapi(
  postXAmzTargetSageMakerGetDeviceFleetReportRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
