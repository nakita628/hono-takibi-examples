import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerUpdateModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerUpdateModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerUpdateModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
