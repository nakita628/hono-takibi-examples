import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateSpaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateSpaceHandler = app.openapi(
  postXAmzTargetSageMakerUpdateSpaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
