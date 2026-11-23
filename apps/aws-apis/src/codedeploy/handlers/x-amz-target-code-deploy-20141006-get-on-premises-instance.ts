import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006GetOnPremisesInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006GetOnPremisesInstanceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006GetOnPremisesInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
