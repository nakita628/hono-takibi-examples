import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2ApicatalogApiIdRoute,
  getApiV2ApicatalogApiIdOpenapiRoute,
  getApiV2ApicatalogApiRoute,
  postApiV2ApicatalogOpenapiRoute,
  putApiV2ApicatalogApiIdOpenapiRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiManagementHandler = app
  .openapi(getApiV2ApicatalogApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2ApicatalogApiIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2ApicatalogApiIdOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2ApicatalogApiIdOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2ApicatalogOpenapiRoute, (c) => {
    throw new Error('Not implemented')
  })
