import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogPvtSpecificationSpecificationIdRoute,
  postApiCatalogPvtSpecificationRoute,
  putApiCatalogPvtSpecificationSpecificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specificationHandler = app
  .openapi(postApiCatalogPvtSpecificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationSpecificationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
