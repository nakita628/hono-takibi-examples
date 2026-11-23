import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListDataQualityJobDefinitionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListDataQualityJobDefinitionsHandler = app.openapi(
  postXAmzTargetSageMakerListDataQualityJobDefinitionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
