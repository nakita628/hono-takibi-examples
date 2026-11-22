import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdPackagesRpmPackageFileIdFileNameRoute,
  getApiV4ProjectsIdPackagesRpmRepodataFileNameRoute,
  postApiV4ProjectsIdPackagesRpmAuthorizeRoute,
  postApiV4ProjectsIdPackagesRpmRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesRPMHandler = app
  .openapi(getApiV4ProjectsIdPackagesRpmRepodataFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesRpmPackageFileIdFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesRpmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesRpmAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
