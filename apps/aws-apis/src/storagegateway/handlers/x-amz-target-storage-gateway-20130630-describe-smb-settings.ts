import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetStorageGateway20130630DescribeSMBSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetStorageGateway20130630DescribeSmbSettingsHandler = app.openapi(
  postXAmzTargetStorageGateway20130630DescribeSMBSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
