import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeExperimentHandler = app.openapi(
  postXAmzTargetSageMakerDescribeExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
