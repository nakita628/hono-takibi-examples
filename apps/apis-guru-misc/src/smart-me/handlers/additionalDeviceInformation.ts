import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiAdditionalDeviceInformationIdRoute } from '../routes'

const app = new OpenAPIHono()

export const additionalDeviceInformationHandler = app.openapi(
  getApiAdditionalDeviceInformationIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
