import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceAssociateEntityToThingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
