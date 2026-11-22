import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
