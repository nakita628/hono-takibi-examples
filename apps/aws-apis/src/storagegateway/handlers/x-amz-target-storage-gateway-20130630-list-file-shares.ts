import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630ListFileSharesRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630ListFileSharesHandler = app.openapi(
  postXAmzTargetStorageGateway20130630ListFileSharesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
