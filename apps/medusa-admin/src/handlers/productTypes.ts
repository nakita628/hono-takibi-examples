import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminProductTypesIdRoute,
  getAdminProductTypesIdRoute,
  getAdminProductTypesRoute,
  postAdminProductTypesIdRoute,
  postAdminProductTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productTypesHandler = app
  .openapi(getAdminProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
