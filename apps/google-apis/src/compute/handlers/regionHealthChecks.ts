import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionHealthChecksHealthCheckRoute,
  getProjectsProjectRegionsRegionHealthChecksHealthCheckRoute,
  getProjectsProjectRegionsRegionHealthChecksRoute,
  patchProjectsProjectRegionsRegionHealthChecksHealthCheckRoute,
  postProjectsProjectRegionsRegionHealthChecksRoute,
  putProjectsProjectRegionsRegionHealthChecksHealthCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionHealthChecksHandler = app
  .openapi(getProjectsProjectRegionsRegionHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionHealthChecksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectRegionsRegionHealthChecksHealthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
