import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceSearchSystemTemplatesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
