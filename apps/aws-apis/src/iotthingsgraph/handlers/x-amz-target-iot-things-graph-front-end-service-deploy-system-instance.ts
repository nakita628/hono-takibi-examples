import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeploySystemInstanceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
