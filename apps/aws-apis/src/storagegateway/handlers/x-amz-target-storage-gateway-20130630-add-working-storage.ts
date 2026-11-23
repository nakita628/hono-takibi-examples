import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630AddWorkingStorageRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630AddWorkingStorageHandler = app.openapi(
  postXAmzTargetStorageGateway20130630AddWorkingStorageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
