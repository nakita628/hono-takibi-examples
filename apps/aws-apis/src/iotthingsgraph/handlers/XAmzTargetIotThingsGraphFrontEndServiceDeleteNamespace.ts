import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceHandler = app.openapi(
  postXAmzTargetIotThingsGraphFrontEndServiceDeleteNamespaceRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
