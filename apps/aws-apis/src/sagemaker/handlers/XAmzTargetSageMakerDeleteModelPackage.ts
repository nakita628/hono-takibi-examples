import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerDeleteModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerDeleteModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerDeleteModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
