import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deletePackagesInstallingPackageIdRoute,
  getPackagesNameRoute,
  getPackagesRoute,
  getRepositoriesRoute,
  postPackagesInstalledNameRoute,
  postRepositoriesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packageHandler = app
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
  .openapi(getRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRepositoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
