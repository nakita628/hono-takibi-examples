import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006AddTagsToOnPremisesInstancesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
