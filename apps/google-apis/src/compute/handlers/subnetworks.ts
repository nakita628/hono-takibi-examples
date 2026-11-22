import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectsProjectRegionsRegionSubnetworksSubnetworkRoute,
  getProjectsProjectAggregatedSubnetworksListUsableRoute,
  getProjectsProjectAggregatedSubnetworksRoute,
  getProjectsProjectRegionsRegionSubnetworksResourceGetIamPolicyRoute,
  getProjectsProjectRegionsRegionSubnetworksRoute,
  getProjectsProjectRegionsRegionSubnetworksSubnetworkRoute,
  patchProjectsProjectRegionsRegionSubnetworksSubnetworkRoute,
  postProjectsProjectRegionsRegionSubnetworksResourceSetIamPolicyRoute,
  postProjectsProjectRegionsRegionSubnetworksResourceTestIamPermissionsRoute,
  postProjectsProjectRegionsRegionSubnetworksRoute,
  postProjectsProjectRegionsRegionSubnetworksSubnetworkExpandIpCidrRangeRoute,
  postProjectsProjectRegionsRegionSubnetworksSubnetworkSetPrivateIpGoogleAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const subnetworksHandler = app
  .openapi(getProjectsProjectAggregatedSubnetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectAggregatedSubnetworksListUsableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSubnetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSubnetworksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSubnetworksResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSubnetworksResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSubnetworksResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectsProjectRegionsRegionSubnetworksSubnetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectsProjectRegionsRegionSubnetworksSubnetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectsProjectRegionsRegionSubnetworksSubnetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectsProjectRegionsRegionSubnetworksSubnetworkExpandIpCidrRangeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postProjectsProjectRegionsRegionSubnetworksSubnetworkSetPrivateIpGoogleAccessRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
