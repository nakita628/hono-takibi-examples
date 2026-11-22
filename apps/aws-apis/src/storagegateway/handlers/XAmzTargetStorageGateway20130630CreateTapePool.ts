import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateTapePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630CreateTapePoolHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateTapePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
