import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelPackageGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetSageMakerListModelPackageGroupsHandler = app.openapi(
  postXAmzTargetSageMakerListModelPackageGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
