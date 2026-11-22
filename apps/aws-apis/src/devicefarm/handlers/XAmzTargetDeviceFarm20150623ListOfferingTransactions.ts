import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListOfferingTransactionsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListOfferingTransactionsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListOfferingTransactionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
