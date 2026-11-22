import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630RetrieveTapeArchiveRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630RetrieveTapeArchiveHandler = app.openapi(
  postXAmzTargetStorageGateway20130630RetrieveTapeArchiveRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
