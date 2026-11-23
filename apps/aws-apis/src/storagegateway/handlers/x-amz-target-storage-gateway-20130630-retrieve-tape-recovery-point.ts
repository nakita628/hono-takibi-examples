import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointHandler = app.openapi(
  postXAmzTargetStorageGateway20130630RetrieveTapeRecoveryPointRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
