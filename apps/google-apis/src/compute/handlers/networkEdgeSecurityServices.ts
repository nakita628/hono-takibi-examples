import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
  getProjectsProjectAggregatedNetworkEdgeSecurityServicesRoute,
  getProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
  patchProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
  postProjectsProjectRegionsRegionNetworkEdgeSecurityServicesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const networkEdgeSecurityServicesHandler = app
  .openapi(getProjectsProjectAggregatedNetworkEdgeSecurityServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionNetworkEdgeSecurityServicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchProjectsProjectRegionsRegionNetworkEdgeSecurityServicesNetworkEdgeSecurityServiceRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
