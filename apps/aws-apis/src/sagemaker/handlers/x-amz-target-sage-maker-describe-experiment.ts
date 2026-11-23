import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeExperimentRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeExperimentHandler = app.openapi(
  postXAmzTargetSageMakerDescribeExperimentRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
