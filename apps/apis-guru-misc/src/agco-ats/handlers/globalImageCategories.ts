import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV2GlobalImageCategoriesIDRoute,
  getApiV2GlobalImageCategoriesRoute,
  postApiV2GlobalImageCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const globalImageCategoriesHandler = app
  .openapi(getApiV2GlobalImageCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2GlobalImageCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2GlobalImageCategoriesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
