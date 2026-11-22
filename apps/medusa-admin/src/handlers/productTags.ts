import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminProductTagsIdRoute,
  getAdminProductTagsIdRoute,
  getAdminProductTagsRoute,
  postAdminProductTagsIdRoute,
  postAdminProductTagsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productTagsHandler = app
  .openapi(getAdminProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
