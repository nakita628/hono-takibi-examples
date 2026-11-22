import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute,
  postApiCatalogPvtSpecificationvalueRoute,
  putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specificationValueHandler = app
  .openapi(postApiCatalogPvtSpecificationvalueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogPvtSpecificationvalueSpecificationValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationvalueSpecificationValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
