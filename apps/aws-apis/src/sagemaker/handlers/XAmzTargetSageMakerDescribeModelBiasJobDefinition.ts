import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelBiasJobDefinitionRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelBiasJobDefinitionHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelBiasJobDefinitionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
