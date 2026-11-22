import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdProductsIdAttachRoute,
  deleteAppsAppIdProductsIdRoute,
  getAppsAppIdProductsIdRoute,
  getAppsAppIdProductsRoute,
  postAppsAppIdProductsBatchRoute,
  postAppsAppIdProductsIdAttachRoute,
  postAppsAppIdProductsIdRoute,
  postAppsAppIdProductsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productsHandler = app
  .openapi(getAppsAppIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductsIdAttachRoute, (c) => {
    throw new Error('Not implemented')
  })
