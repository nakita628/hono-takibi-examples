import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchFlowTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
