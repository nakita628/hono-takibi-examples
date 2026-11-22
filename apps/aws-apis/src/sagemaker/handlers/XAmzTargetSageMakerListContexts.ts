import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListContextsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListContextsHandler = app.openapi(
  postXAmzTargetSageMakerListContextsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
