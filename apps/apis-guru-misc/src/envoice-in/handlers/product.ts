import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiProductAllRoute,
  getApiProductDetailsRoute,
  postApiProductDeleteRoute,
  postApiProductNewRoute,
  postApiProductUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const productHandler = app
  .openapi(getApiProductAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiProductDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiProductUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
