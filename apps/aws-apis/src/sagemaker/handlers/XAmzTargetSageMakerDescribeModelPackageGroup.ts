import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
