import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1TaxesTaxRateUuidRoute,
  getV1TaxesCountRoute,
  getV1TaxesRoute,
  getV1TaxesSettingsRoute,
  getV1TaxesTaxRateUuidRoute,
  postV1TaxesRoute,
  putV1TaxesSettingsRoute,
  putV1TaxesTaxRateUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxesCountRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxesSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxesTaxRateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxesTaxRateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxesTaxRateUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
