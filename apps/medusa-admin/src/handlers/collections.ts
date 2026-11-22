import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdminCollectionsIdRoute,
  getAdminCollectionsIdRoute,
  getAdminCollectionsRoute,
  postAdminCollectionsIdProductsRoute,
  postAdminCollectionsIdRoute,
  postAdminCollectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const collectionsHandler = app
  .openapi(getAdminCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
