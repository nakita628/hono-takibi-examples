import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionRoutersRouterRoute,
  getProjectsProjectAggregatedRoutersRoute,
  getProjectsProjectRegionsRegionRoutersRoute,
  getProjectsProjectRegionsRegionRoutersRouterGetNatIpInfoRoute,
  getProjectsProjectRegionsRegionRoutersRouterGetNatMappingInfoRoute,
  getProjectsProjectRegionsRegionRoutersRouterGetRouterStatusRoute,
  getProjectsProjectRegionsRegionRoutersRouterRoute,
  patchProjectsProjectRegionsRegionRoutersRouterRoute,
  postProjectsProjectRegionsRegionRoutersRoute,
  postProjectsProjectRegionsRegionRoutersRouterPreviewRoute,
  putProjectsProjectRegionsRegionRoutersRouterRoute,
} from '../routes'

const app = new OpenAPIHono()

export const routersHandler = app
  .openapi(getProjectsProjectAggregatedRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionRoutersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionRoutersRouterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoutersRouterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionRoutersRouterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectsProjectRegionsRegionRoutersRouterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoutersRouterGetNatIpInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoutersRouterGetNatMappingInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionRoutersRouterGetRouterStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionRoutersRouterPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
