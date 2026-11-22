import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProjectsProjectRegionsRegionDiskTypesDiskTypeRoute,
  getProjectsProjectRegionsRegionDiskTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionDiskTypesHandler = app
  .openapi(getProjectsProjectRegionsRegionDiskTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionDiskTypesDiskTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
