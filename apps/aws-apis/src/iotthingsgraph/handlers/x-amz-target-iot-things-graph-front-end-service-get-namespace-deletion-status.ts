import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceGetNamespaceDeletionStatusRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
