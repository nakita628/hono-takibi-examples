import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteDataQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteDataQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDeleteDataQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
