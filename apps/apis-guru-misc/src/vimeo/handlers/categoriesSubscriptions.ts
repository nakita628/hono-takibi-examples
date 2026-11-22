import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMeCategoriesCategoryRoute,
  deleteUsersUserIdCategoriesCategoryRoute,
  getMeCategoriesCategoryRoute,
  getMeCategoriesRoute,
  getUsersUserIdCategoriesCategoryRoute,
  getUsersUserIdCategoriesRoute,
  putMeCategoriesCategoryRoute,
  putUsersUserIdCategoriesCategoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesSubscriptionsHandler = app
  .openapi(getMeCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putMeCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUsersUserIdCategoriesCategoryRoute, (c) => {
    throw new Error('Not implemented')
  })
