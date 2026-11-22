import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListOfferingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetDeviceFarm20150623ListOfferingsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListOfferingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
