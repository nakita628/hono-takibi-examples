import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1ConfigUiIdRoute, getApiV1ConfigUiRoute, putApiV1ConfigUiIdRoute } from '../routes'

const app = new OpenAPIHono()

export const uiConfigHandler = app
  .openapi(putApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1ConfigUiRoute, (c) => {
    throw new Error('Not implemented')
  })
