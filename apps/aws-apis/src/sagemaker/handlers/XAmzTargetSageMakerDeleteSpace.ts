import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteSpaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteSpaceHandler = app.openapi(
  postXAmzTargetSageMakerDeleteSpaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
