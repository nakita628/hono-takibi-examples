import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoryDeleteJsonRoute,
  deleteCategoryImageDeleteJsonRoute,
  getCategoryCountJsonRoute,
  getCategoryFindJsonRoute,
  getCategoryInfoJsonRoute,
  getCategoryListJsonRoute,
  postCategoryAddJsonRoute,
  postCategoryAssignJsonRoute,
  postCategoryImageAddJsonRoute,
  postCategoryUnassignJsonRoute,
  putCategoryUpdateJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoryHandler = app
  .openapi(postCategoryAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoryAssignJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoryCountJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoryDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoryFindJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoryImageAddJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCategoryImageDeleteJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoryInfoJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoryListJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCategoryUnassignJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoryUpdateJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
