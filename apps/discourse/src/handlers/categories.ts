import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCategoriesJsonRoute,
  getCIdShowJsonRoute,
  getCSlugIdJsonRoute,
  postCategoriesJsonRoute,
  putCategoriesIdJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const categoriesHandler = app
  .openapi(postCategoriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCategoriesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putCategoriesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCSlugIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCIdShowJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
