import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppPackagesAppPkgIdRoute,
  getAppPackagesAppPkgIdAppdRoute,
  getAppPackagesAppPkgIdPackageContentRoute,
  getAppPackagesAppPkgIdRoute,
  getAppPackagesRoute,
  patchAppPackagesAppPkgIdRoute,
  postAppPackagesRoute,
  putAppPackagesAppPkgIdPackageContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const appPackagesHandler = app
  .openapi(getAppPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppPackagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppPackagesAppPkgIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdAppdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppPackagesAppPkgIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAppPackagesAppPkgIdPackageContentRoute, (c) => {
    throw new Error('Not implemented')
  })
