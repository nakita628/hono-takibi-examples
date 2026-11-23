import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeHyperParameterTuningJobRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeHyperParameterTuningJobHandler = app.openapi(
  postXAmzTargetSageMakerDescribeHyperParameterTuningJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
