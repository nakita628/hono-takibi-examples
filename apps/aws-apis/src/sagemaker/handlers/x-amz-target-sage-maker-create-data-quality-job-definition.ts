import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateDataQualityJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateDataQualityJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerCreateDataQualityJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
