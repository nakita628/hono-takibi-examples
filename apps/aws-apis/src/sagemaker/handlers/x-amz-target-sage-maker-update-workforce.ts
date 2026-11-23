import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateWorkforceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateWorkforceHandler = app.openapi(
  postXAmzTargetSageMakerUpdateWorkforceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
