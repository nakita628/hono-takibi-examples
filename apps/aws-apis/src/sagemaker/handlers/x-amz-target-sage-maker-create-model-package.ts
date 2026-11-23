import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelPackageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateModelPackageHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelPackageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
