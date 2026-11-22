import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute,
  getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute,
  postApiCatalogSystemPvtSpecificationFieldValueRoute,
  putApiCatalogSystemPvtSpecificationFieldValueRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specificationFieldValueHandler = app
  .openapi(getApiCatalogSystemPubSpecificationFieldvalueFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSpecificationFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSpecificationFieldValueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSpecificationFieldValueFieldValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
