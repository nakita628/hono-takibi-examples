import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006RemoveTagsFromOnPremisesInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
