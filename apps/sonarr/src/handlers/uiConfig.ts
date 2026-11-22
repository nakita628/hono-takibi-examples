import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV3ConfigUiIdRoute, getApiV3ConfigUiRoute, putApiV3ConfigUiIdRoute } from '../routes'

const app = new OpenAPIHono()

export const uiConfigHandler = app
  .openapi(putApiV3ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigUiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigUiRoute, (c) => {
    throw new Error('Not implemented')
  })
