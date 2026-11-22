import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiCatalogPvtSpecificationNonstructuredIdRoute,
  deleteApiCatalogPvtSpecificationNonstructuredRoute,
  getApiCatalogPvtSpecificationNonstructuredIdRoute,
  getApiCatalogPvtSpecificationNonstructuredRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nonStructuredSpecificationHandler = app
  .openapi(deleteApiCatalogPvtSpecificationNonstructuredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationNonstructuredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiCatalogPvtSpecificationNonstructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationNonstructuredIdRoute, (c) => {
    throw new Error('Not implemented')
  })
