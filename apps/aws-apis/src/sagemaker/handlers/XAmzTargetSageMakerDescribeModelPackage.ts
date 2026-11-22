import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDescribeModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDescribeModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerDescribeModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
