import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerDeleteModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
