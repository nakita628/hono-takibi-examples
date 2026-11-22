import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCategoriesIdRoute,
  getCategoriesIdRoute,
  getUsersIdCategoriesRoute,
  postUsersIdCategoriesRoute,
  putCategoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(deleteCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUsersIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
