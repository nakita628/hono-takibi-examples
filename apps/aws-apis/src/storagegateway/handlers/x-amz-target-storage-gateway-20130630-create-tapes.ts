import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630CreateTapesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630CreateTapesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630CreateTapesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
