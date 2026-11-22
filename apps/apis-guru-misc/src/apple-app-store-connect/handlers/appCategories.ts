import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1AppCategoriesIdParentRoute,
  getV1AppCategoriesIdRoute,
  getV1AppCategoriesIdSubcategoriesRoute,
  getV1AppCategoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appCategoriesHandler = app
  .openapi(getV1AppCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdParentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AppCategoriesIdSubcategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
