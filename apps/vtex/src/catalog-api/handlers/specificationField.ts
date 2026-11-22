import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute,
  postApiCatalogSystemPvtSpecificationFieldRoute,
  putApiCatalogSystemPvtSpecificationFieldRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specificationFieldHandler = app
  .openapi(getApiCatalogSystemPubSpecificationFieldGetFieldIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiCatalogSystemPvtSpecificationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogSystemPvtSpecificationFieldRoute, (c) => {
    throw new Error('Not implemented')
  })
