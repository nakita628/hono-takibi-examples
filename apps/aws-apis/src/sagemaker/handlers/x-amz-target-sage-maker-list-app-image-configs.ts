import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListAppImageConfigsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListAppImageConfigsHandler = app.openapi(
  postXAmzTargetSageMakerListAppImageConfigsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
