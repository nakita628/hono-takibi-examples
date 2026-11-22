import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiMeterFolderInformationIdRoute, postApiMeterFolderInformationRoute } from '../routes'

const app = new OpenAPIHono()

export const meterFolderInformationHandler = app
  .openapi(postApiMeterFolderInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiMeterFolderInformationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
