import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetGameLiftUpdateFleetCapacityRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetGameLiftUpdateFleetCapacityHandler = app.openapi(
  postXAmzTargetGameLiftUpdateFleetCapacityRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
