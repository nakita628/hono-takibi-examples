import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelPackagesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelPackagesHandler = app.openapi(
  postXAmzTargetSageMakerListModelPackagesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
