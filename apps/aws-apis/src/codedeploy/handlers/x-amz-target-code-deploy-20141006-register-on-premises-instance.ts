import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceHandler = app.openapi(
  postXAmzTargetCodeDeploy20141006RegisterOnPremisesInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
