import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListImageVersionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListImageVersionsHandler = app.openapi(
  postXAmzTargetSageMakerListImageVersionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
