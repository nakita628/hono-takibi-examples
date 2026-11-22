import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAppImageConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListAppImageConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListAppImageConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
