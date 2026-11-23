import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteExportRealmExportIdRoute,
  getExportRealmConsentsRoute,
  getExportRealmRoute,
  postExportRealmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const exportHandler = app
  .openapi(deleteExportRealmExportIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postExportRealmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportRealmConsentsRoute, (c) => {
    throw new Error('Not implemented')
  })
