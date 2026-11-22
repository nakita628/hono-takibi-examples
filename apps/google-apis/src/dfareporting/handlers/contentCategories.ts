import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteUserprofilesProfileIdContentCategoriesIdRoute,
  getUserprofilesProfileIdContentCategoriesIdRoute,
  getUserprofilesProfileIdContentCategoriesRoute,
  patchUserprofilesProfileIdContentCategoriesRoute,
  postUserprofilesProfileIdContentCategoriesRoute,
  putUserprofilesProfileIdContentCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const contentCategoriesHandler = app
  .openapi(getUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putUserprofilesProfileIdContentCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteUserprofilesProfileIdContentCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getUserprofilesProfileIdContentCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
