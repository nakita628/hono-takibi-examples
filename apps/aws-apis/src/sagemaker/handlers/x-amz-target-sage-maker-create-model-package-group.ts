import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerCreateModelPackageGroupRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerCreateModelPackageGroupHandler = app.openapi(
  postXAmzTargetSageMakerCreateModelPackageGroupRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
