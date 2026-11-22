import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplateRoute,
  getProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplateRoute,
  getProjectsProjectRegionsRegionInstanceTemplatesRoute,
  postProjectsProjectRegionsRegionInstanceTemplatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionInstanceTemplatesHandler = app
  .openapi(getProjectsProjectRegionsRegionInstanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionInstanceTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionInstanceTemplatesInstanceTemplateRoute, (c) => {
    throw new Error('Not implemented')
  })
