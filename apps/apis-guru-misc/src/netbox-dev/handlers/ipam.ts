import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteIpamAggregatesIdIndexRoute,
  deleteIpamAggregatesIndexRoute,
  deleteIpamAsnsIdIndexRoute,
  deleteIpamAsnsIndexRoute,
  deleteIpamFhrpGroupAssignmentsIdIndexRoute,
  deleteIpamFhrpGroupAssignmentsIndexRoute,
  deleteIpamFhrpGroupsIdIndexRoute,
  deleteIpamFhrpGroupsIndexRoute,
  deleteIpamIpAddressesIdIndexRoute,
  deleteIpamIpAddressesIndexRoute,
  deleteIpamIpRangesIdIndexRoute,
  deleteIpamIpRangesIndexRoute,
  deleteIpamL2vpnsIdIndexRoute,
  deleteIpamL2vpnsIndexRoute,
  deleteIpamL2vpnTerminationsIdIndexRoute,
  deleteIpamL2vpnTerminationsIndexRoute,
  deleteIpamPrefixesIdIndexRoute,
  deleteIpamPrefixesIndexRoute,
  deleteIpamRirsIdIndexRoute,
  deleteIpamRirsIndexRoute,
  deleteIpamRolesIdIndexRoute,
  deleteIpamRolesIndexRoute,
  deleteIpamRouteTargetsIdIndexRoute,
  deleteIpamRouteTargetsIndexRoute,
  deleteIpamServicesIdIndexRoute,
  deleteIpamServicesIndexRoute,
  deleteIpamServiceTemplatesIdIndexRoute,
  deleteIpamServiceTemplatesIndexRoute,
  deleteIpamVlanGroupsIdIndexRoute,
  deleteIpamVlanGroupsIndexRoute,
  deleteIpamVlansIdIndexRoute,
  deleteIpamVlansIndexRoute,
  deleteIpamVrfsIdIndexRoute,
  deleteIpamVrfsIndexRoute,
  getIpamAggregatesIdIndexRoute,
  getIpamAggregatesIndexRoute,
  getIpamAsnsIdIndexRoute,
  getIpamAsnsIndexRoute,
  getIpamFhrpGroupAssignmentsIdIndexRoute,
  getIpamFhrpGroupAssignmentsIndexRoute,
  getIpamFhrpGroupsIdIndexRoute,
  getIpamFhrpGroupsIndexRoute,
  getIpamIpAddressesIdIndexRoute,
  getIpamIpAddressesIndexRoute,
  getIpamIpRangesIdAvailableIpsIndexRoute,
  getIpamIpRangesIdIndexRoute,
  getIpamIpRangesIndexRoute,
  getIpamL2vpnsIdIndexRoute,
  getIpamL2vpnsIndexRoute,
  getIpamL2vpnTerminationsIdIndexRoute,
  getIpamL2vpnTerminationsIndexRoute,
  getIpamPrefixesIdAvailableIpsIndexRoute,
  getIpamPrefixesIdAvailablePrefixesIndexRoute,
  getIpamPrefixesIdIndexRoute,
  getIpamPrefixesIndexRoute,
  getIpamRirsIdIndexRoute,
  getIpamRirsIndexRoute,
  getIpamRolesIdIndexRoute,
  getIpamRolesIndexRoute,
  getIpamRouteTargetsIdIndexRoute,
  getIpamRouteTargetsIndexRoute,
  getIpamServicesIdIndexRoute,
  getIpamServicesIndexRoute,
  getIpamServiceTemplatesIdIndexRoute,
  getIpamServiceTemplatesIndexRoute,
  getIpamVlanGroupsIdAvailableVlansIndexRoute,
  getIpamVlanGroupsIdIndexRoute,
  getIpamVlanGroupsIndexRoute,
  getIpamVlansIdIndexRoute,
  getIpamVlansIndexRoute,
  getIpamVrfsIdIndexRoute,
  getIpamVrfsIndexRoute,
  patchIpamAggregatesIdIndexRoute,
  patchIpamAggregatesIndexRoute,
  patchIpamAsnsIdIndexRoute,
  patchIpamAsnsIndexRoute,
  patchIpamFhrpGroupAssignmentsIdIndexRoute,
  patchIpamFhrpGroupAssignmentsIndexRoute,
  patchIpamFhrpGroupsIdIndexRoute,
  patchIpamFhrpGroupsIndexRoute,
  patchIpamIpAddressesIdIndexRoute,
  patchIpamIpAddressesIndexRoute,
  patchIpamIpRangesIdIndexRoute,
  patchIpamIpRangesIndexRoute,
  patchIpamL2vpnsIdIndexRoute,
  patchIpamL2vpnsIndexRoute,
  patchIpamL2vpnTerminationsIdIndexRoute,
  patchIpamL2vpnTerminationsIndexRoute,
  patchIpamPrefixesIdIndexRoute,
  patchIpamPrefixesIndexRoute,
  patchIpamRirsIdIndexRoute,
  patchIpamRirsIndexRoute,
  patchIpamRolesIdIndexRoute,
  patchIpamRolesIndexRoute,
  patchIpamRouteTargetsIdIndexRoute,
  patchIpamRouteTargetsIndexRoute,
  patchIpamServicesIdIndexRoute,
  patchIpamServicesIndexRoute,
  patchIpamServiceTemplatesIdIndexRoute,
  patchIpamServiceTemplatesIndexRoute,
  patchIpamVlanGroupsIdIndexRoute,
  patchIpamVlanGroupsIndexRoute,
  patchIpamVlansIdIndexRoute,
  patchIpamVlansIndexRoute,
  patchIpamVrfsIdIndexRoute,
  patchIpamVrfsIndexRoute,
  postIpamAggregatesIndexRoute,
  postIpamAsnsIndexRoute,
  postIpamFhrpGroupAssignmentsIndexRoute,
  postIpamFhrpGroupsIndexRoute,
  postIpamIpAddressesIndexRoute,
  postIpamIpRangesIdAvailableIpsIndexRoute,
  postIpamIpRangesIndexRoute,
  postIpamL2vpnsIndexRoute,
  postIpamL2vpnTerminationsIndexRoute,
  postIpamPrefixesIdAvailableIpsIndexRoute,
  postIpamPrefixesIdAvailablePrefixesIndexRoute,
  postIpamPrefixesIndexRoute,
  postIpamRirsIndexRoute,
  postIpamRolesIndexRoute,
  postIpamRouteTargetsIndexRoute,
  postIpamServicesIndexRoute,
  postIpamServiceTemplatesIndexRoute,
  postIpamVlanGroupsIdAvailableVlansIndexRoute,
  postIpamVlanGroupsIndexRoute,
  postIpamVlansIndexRoute,
  postIpamVrfsIndexRoute,
  putIpamAggregatesIdIndexRoute,
  putIpamAggregatesIndexRoute,
  putIpamAsnsIdIndexRoute,
  putIpamAsnsIndexRoute,
  putIpamFhrpGroupAssignmentsIdIndexRoute,
  putIpamFhrpGroupAssignmentsIndexRoute,
  putIpamFhrpGroupsIdIndexRoute,
  putIpamFhrpGroupsIndexRoute,
  putIpamIpAddressesIdIndexRoute,
  putIpamIpAddressesIndexRoute,
  putIpamIpRangesIdIndexRoute,
  putIpamIpRangesIndexRoute,
  putIpamL2vpnsIdIndexRoute,
  putIpamL2vpnsIndexRoute,
  putIpamL2vpnTerminationsIdIndexRoute,
  putIpamL2vpnTerminationsIndexRoute,
  putIpamPrefixesIdIndexRoute,
  putIpamPrefixesIndexRoute,
  putIpamRirsIdIndexRoute,
  putIpamRirsIndexRoute,
  putIpamRolesIdIndexRoute,
  putIpamRolesIndexRoute,
  putIpamRouteTargetsIdIndexRoute,
  putIpamRouteTargetsIndexRoute,
  putIpamServicesIdIndexRoute,
  putIpamServicesIndexRoute,
  putIpamServiceTemplatesIdIndexRoute,
  putIpamServiceTemplatesIndexRoute,
  putIpamVlanGroupsIdIndexRoute,
  putIpamVlanGroupsIndexRoute,
  putIpamVlansIdIndexRoute,
  putIpamVlansIndexRoute,
  putIpamVrfsIdIndexRoute,
  putIpamVrfsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipamHandler = app
  .openapi(deleteIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamIpRangesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamIpRangesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamL2vpnTerminationsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamL2vpnTerminationsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamL2vpnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamL2vpnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlanGroupsIdAvailableVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVlanGroupsIdAvailableVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
