import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getExportOrgAssetsServicenowCsvRoute,
  getExportOrgAssetsServicenowJsonRoute,
  getExportOrgServicesServicenowCsvRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceNowHandler = app
  .openapi(getExportOrgAssetsServicenowCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgAssetsServicenowJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getExportOrgServicesServicenowCsvRoute, (c) => {
    throw new Error('Not implemented')
  })
