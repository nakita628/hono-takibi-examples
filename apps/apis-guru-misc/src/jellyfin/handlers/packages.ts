import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagesInstallingPackageIdRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  postPackagesInstalledNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesHandler = app
  .openapi(getPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPackagesInstalledNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deletePackagesInstallingPackageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPackagesNameRoute, (c) => {
    throw new Error('Not implemented')
  })
