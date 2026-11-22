import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionAutoscalersAutoscalerRoute,
  getProjectsProjectRegionsRegionAutoscalersAutoscalerRoute,
  getProjectsProjectRegionsRegionAutoscalersRoute,
  patchProjectsProjectRegionsRegionAutoscalersRoute,
  postProjectsProjectRegionsRegionAutoscalersRoute,
  putProjectsProjectRegionsRegionAutoscalersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const regionAutoscalersHandler = app
  .openapi(getProjectsProjectRegionsRegionAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectRegionsRegionAutoscalersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionAutoscalersAutoscalerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionAutoscalersAutoscalerRoute, (c) => {
    throw new Error('Not implemented')
  })
