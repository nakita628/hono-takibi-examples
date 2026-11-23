import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623RenewOfferingRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623RenewOfferingHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623RenewOfferingRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
