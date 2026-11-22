import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerCreateModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
