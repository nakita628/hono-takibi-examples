import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateContextRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateContextHandler = app.openapi(
  postXAmzTargetSageMakerUpdateContextRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
