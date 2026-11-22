import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetAWS242ServiceCatalogServiceListRecordHistoryHandler = app.openapi(
  postXAmzTargetAWS242ServiceCatalogServiceListRecordHistoryRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
