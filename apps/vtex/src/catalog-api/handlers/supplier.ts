import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSupplierSupplierIdRoute,
  postApiCatalogPvtSupplierRoute,
  putApiCatalogPvtSupplierSupplierIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const supplierHandler = app
  .openapi(postApiCatalogPvtSupplierRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSupplierSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSupplierSupplierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
