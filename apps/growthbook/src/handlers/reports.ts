import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ReportsIdRoute,
  getV1ReportsRoute,
  postV1ReportsIdRefreshRoute,
  postV1ReportsRoute,
  putV1ReportsIdMetadataRoute,
  putV1ReportsIdSettingsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsHandler = app
  .openapi(getV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReportsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReportsIdRefreshRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReportsIdMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReportsIdSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
