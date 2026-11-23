import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetSageMakerListModelPackageGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetSageMakerListModelPackageGroupsHandler = app.openapi(
  postXAmzTargetSageMakerListModelPackageGroupsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
