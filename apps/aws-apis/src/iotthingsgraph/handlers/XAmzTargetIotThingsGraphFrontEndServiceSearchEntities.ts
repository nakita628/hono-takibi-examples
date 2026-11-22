import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchEntitiesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
