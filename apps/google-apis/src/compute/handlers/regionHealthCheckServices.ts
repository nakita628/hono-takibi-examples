import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute,
  getProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute,
  getProjectsProjectRegionsRegionHealthCheckServicesRoute,
  patchProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute,
  postProjectsProjectRegionsRegionHealthCheckServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionHealthCheckServicesHandler = app
  .openapi(getProjectsProjectRegionsRegionHealthCheckServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionHealthCheckServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionHealthCheckServicesHealthCheckServiceRoute, (c) => {
    throw new Error('Not implemented')
  })
