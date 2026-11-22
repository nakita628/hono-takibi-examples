import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminProductCategoriesIdRoute,
  getAdminProductCategoriesIdRoute,
  getAdminProductCategoriesRoute,
  postAdminProductCategoriesIdProductsRoute,
  postAdminProductCategoriesIdRoute,
  postAdminProductCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productCategoriesHandler = app
  .openapi(getAdminProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
