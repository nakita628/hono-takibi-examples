import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute,
  getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categorySpecificationHandler = app
  .openapi(getApiCatalogSystemPubSpecificationFieldListByCategoryIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiCatalogSystemPubSpecificationFieldListTreeByCategoryIdCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
