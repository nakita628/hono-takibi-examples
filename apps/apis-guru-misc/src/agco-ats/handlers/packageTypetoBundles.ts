import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2PackageTypetoBundlesRoute,
  getApiV2PackageTypetoBundlesRoute,
  postApiV2PackageTypetoBundlesRoute,
  putApiV2PackageTypetoBundlesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageTypetoBundlesHandler = app
  .openapi(deleteApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2PackageTypetoBundlesRoute, (c) => {
    throw new Error('Not implemented')
  })
