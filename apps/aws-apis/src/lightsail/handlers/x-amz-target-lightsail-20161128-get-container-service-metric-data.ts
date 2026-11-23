import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetLightsail20161128GetContainerServiceMetricDataRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetLightsail20161128GetContainerServiceMetricDataHandler = app.openapi(
  postXAmzTargetLightsail20161128GetContainerServiceMetricDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
