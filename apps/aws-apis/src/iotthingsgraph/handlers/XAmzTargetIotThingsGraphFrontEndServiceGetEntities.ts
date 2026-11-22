import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceGetEntitiesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
