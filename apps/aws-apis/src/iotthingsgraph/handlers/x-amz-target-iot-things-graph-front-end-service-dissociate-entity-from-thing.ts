import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDissociateEntityFromThingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
