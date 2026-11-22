import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2AuthorizationCategoriesIdRoute,
  deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute,
  getApiV2AuthorizationCategoriesRoute,
  getApiV2AuthorizationCategoriesUsersRoute,
  postApiV2AuthorizationCategoriesIdUsersUserIDRoute,
  postApiV2AuthorizationCategoriesRoute,
  putApiV2AuthorizationCategoriesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const authorizationCategoriesHandler = app
  .openapi(getApiV2AuthorizationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2AuthorizationCategoriesUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2AuthorizationCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2AuthorizationCategoriesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2AuthorizationCategoriesIdUsersUserIDRoute, (c) => {
    throw new Error('Not implemented')
  })
