import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDescribeModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
