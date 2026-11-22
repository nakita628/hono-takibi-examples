import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute,
  getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute,
  postApiCatalogPvtSpecificationgroupRoute,
  putApiCatalogPvtSpecificationgroupGroupIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const specificationGroupHandler = app
  .openapi(postApiCatalogPvtSpecificationgroupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiCatalogPvtSpecificationgroupGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationGroupGetGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPvtSpecificationGroupbycategoryCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
