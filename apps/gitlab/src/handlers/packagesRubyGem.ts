import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV4ProjectsIdPackagesRubygemsApiV1DependenciesRoute,
  getApiV4ProjectsIdPackagesRubygemsFileNameRoute,
  getApiV4ProjectsIdPackagesRubygemsGemsFileNameRoute,
  getApiV4ProjectsIdPackagesRubygemsQuickMarshal48FileNameRoute,
  postApiV4ProjectsIdPackagesRubygemsApiV1GemsAuthorizeRoute,
  postApiV4ProjectsIdPackagesRubygemsApiV1GemsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const packagesRubyGemHandler = app
  .openapi(getApiV4ProjectsIdPackagesRubygemsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesRubygemsQuickMarshal48FileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesRubygemsGemsFileNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesRubygemsApiV1GemsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV4ProjectsIdPackagesRubygemsApiV1GemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV4ProjectsIdPackagesRubygemsApiV1DependenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
