import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeTapeRecoveryPointsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
