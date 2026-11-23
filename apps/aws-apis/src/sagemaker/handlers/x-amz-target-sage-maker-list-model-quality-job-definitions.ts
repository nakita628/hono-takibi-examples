import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelQualityJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelQualityJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListModelQualityJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
