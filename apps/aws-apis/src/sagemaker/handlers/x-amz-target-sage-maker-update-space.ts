import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateSpaceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateSpaceHandler = app.openapi(
  postXAmzTargetSageMakerUpdateSpaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
