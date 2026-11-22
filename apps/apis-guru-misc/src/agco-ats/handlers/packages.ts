import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PackagesIDRoute,
  getApiV2PackagesIDRoute,
  getApiV2PackagesRoute,
  postApiV2PackagesRoute,
  putApiV2PackagesIDRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHandler = app
  .openapi(getApiV2PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackagesIDRoute, (c) => {
    throw new Error('Not implemented')
  })
