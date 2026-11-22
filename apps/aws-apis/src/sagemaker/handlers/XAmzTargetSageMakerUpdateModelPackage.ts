import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerUpdateModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerUpdateModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
