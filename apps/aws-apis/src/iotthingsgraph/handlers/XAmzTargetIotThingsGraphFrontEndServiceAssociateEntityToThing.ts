import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
