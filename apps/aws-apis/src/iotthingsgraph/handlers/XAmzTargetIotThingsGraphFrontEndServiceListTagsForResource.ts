import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceListTagsForResourceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
