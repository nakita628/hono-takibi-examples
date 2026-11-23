import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetDeviceFarm20150623ListOfferingPromotionsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetDeviceFarm20150623ListOfferingPromotionsHandler = app.openapi(
  postXAmzTargetDeviceFarm20150623ListOfferingPromotionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
