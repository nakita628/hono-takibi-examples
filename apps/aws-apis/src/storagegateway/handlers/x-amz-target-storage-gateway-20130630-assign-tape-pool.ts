import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AssignTapePoolRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630AssignTapePoolHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AssignTapePoolRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
