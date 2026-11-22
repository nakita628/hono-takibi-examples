import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1PackagesPackageIdRoute,
  getV1PackagesPackageIdRoute,
  getV1PackagesRoute,
  postV1PackagesRoute,
  putV1PackagesPackageIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageTypesHandler = app
  .openapi(getV1PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1PackagesPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
