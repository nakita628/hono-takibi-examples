import { OpenAPIHono } from '@hono/zod-openapi'
import { postXAmzTargetWorkMailServicePutInboundDmarcSettingsRoute } from '../routes'

const app = new OpenAPIHono()

export const xAmzTargetWorkMailServicePutInboundDmarcSettingsHandler = app.openapi(
  postXAmzTargetWorkMailServicePutInboundDmarcSettingsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
