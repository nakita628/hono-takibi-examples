import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCatalogsProductGroupsMultipleRoute,
  deleteCatalogsProductGroupsProductGroupIdRoute,
  getCatalogsProductGroupsProductGroupIdProductCountsRoute,
  getCatalogsProductGroupsProductGroupIdProductsRoute,
  getCatalogsProductGroupsProductGroupIdRoute,
  getCatalogsProductGroupsRoute,
  patchCatalogsProductGroupsProductGroupIdRoute,
  postCatalogsProductGroupsMultipleRoute,
  postCatalogsProductGroupsRoute,
  postCatalogsProductsGetByProductGroupFiltersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const catalogProductGroupsHandler = app
  .openapi(getCatalogsProductGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsProductGroupsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductGroupsMultipleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCatalogsProductGroupsProductGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdProductCountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCatalogsProductGroupsProductGroupIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCatalogsProductsGetByProductGroupFiltersRoute, (c) => {
    throw new Error('Not implemented')
  })
