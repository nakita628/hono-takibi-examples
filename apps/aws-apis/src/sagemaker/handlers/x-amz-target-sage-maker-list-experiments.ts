import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListExperimentsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListExperimentsHandler = app.openapi(
  postXAmzTargetSageMakerListExperimentsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
