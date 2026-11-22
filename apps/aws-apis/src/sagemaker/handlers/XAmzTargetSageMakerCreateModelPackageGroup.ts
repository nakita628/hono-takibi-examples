import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
