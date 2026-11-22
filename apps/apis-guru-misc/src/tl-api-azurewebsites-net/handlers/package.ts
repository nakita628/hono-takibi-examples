import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPackageRoute,
  getApiPackageRoute,
  getApiPackageSearchRoute,
  postApiPackageRoute,
  putApiPackageRoute,
  putApiPackageUpdateStatusRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageHandler = app
  .openapi(deleteApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPackageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPackageSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPackageUpdateStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
