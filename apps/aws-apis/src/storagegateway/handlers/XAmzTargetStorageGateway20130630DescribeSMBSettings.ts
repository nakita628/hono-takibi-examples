import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeSMBSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const XAmzTargetStorageGateway20130630DescribeSMBSettingsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeSMBSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
