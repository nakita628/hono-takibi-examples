import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV3ConfigImportlistIdRoute,
  getApiV3ConfigImportlistRoute,
  putApiV3ConfigImportlistIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const importListConfigHandler = app
  .openapi(getApiV3ConfigImportlistRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3ConfigImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3ConfigImportlistIdRoute, (c) => {
    throw new Error('Not implemented')
  })
