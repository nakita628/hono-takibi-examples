import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionUrlMapsUrlMapRoute,
  getProjectsProjectRegionsRegionUrlMapsRoute,
  getProjectsProjectRegionsRegionUrlMapsUrlMapRoute,
  patchProjectsProjectRegionsRegionUrlMapsUrlMapRoute,
  postProjectsProjectRegionsRegionUrlMapsRoute,
  postProjectsProjectRegionsRegionUrlMapsUrlMapValidateRoute,
  putProjectsProjectRegionsRegionUrlMapsUrlMapRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionUrlMapsHandler = app
  .openapi(getProjectsProjectRegionsRegionUrlMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionUrlMapsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectRegionsRegionUrlMapsUrlMapRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionUrlMapsUrlMapValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
