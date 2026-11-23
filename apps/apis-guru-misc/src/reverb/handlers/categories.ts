import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesFlatRoute,
  getCategoriesProductTypeCategoryRoute,
  getCategoriesRoute,
  getCategoriesTaxonomyRoute,
  getCategoriesUuidRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(getCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesFlatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesTaxonomyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesProductTypeCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesUuidRoute, (c) => {
    throw new Error('Not implemented')
  })
