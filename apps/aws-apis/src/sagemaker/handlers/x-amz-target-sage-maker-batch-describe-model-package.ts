import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerBatchDescribeModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerBatchDescribeModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerBatchDescribeModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
