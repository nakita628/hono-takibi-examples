import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const deleteIpamAggregatesIndexRouteHandler: RouteHandler<
  typeof deleteIpamAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamAggregatesIndexRouteHandler: RouteHandler<
  typeof getIpamAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamAggregatesIndexRouteHandler: RouteHandler<
  typeof patchIpamAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamAggregatesIndexRouteHandler: RouteHandler<
  typeof postIpamAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamAggregatesIndexRouteHandler: RouteHandler<
  typeof putIpamAggregatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamAggregatesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamAggregatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamAggregatesIdIndexRouteHandler: RouteHandler<
  typeof getIpamAggregatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamAggregatesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamAggregatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamAggregatesIdIndexRouteHandler: RouteHandler<
  typeof putIpamAggregatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamAsnsIndexRouteHandler: RouteHandler<
  typeof deleteIpamAsnsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamAsnsIndexRouteHandler: RouteHandler<typeof getIpamAsnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamAsnsIndexRouteHandler: RouteHandler<typeof patchIpamAsnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpamAsnsIndexRouteHandler: RouteHandler<typeof postIpamAsnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpamAsnsIndexRouteHandler: RouteHandler<typeof putIpamAsnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamAsnsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamAsnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamAsnsIdIndexRouteHandler: RouteHandler<typeof getIpamAsnsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamAsnsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamAsnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamAsnsIdIndexRouteHandler: RouteHandler<typeof putIpamAsnsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamFhrpGroupAssignmentsIndexRouteHandler: RouteHandler<
  typeof deleteIpamFhrpGroupAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamFhrpGroupAssignmentsIndexRouteHandler: RouteHandler<
  typeof getIpamFhrpGroupAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamFhrpGroupAssignmentsIndexRouteHandler: RouteHandler<
  typeof patchIpamFhrpGroupAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamFhrpGroupAssignmentsIndexRouteHandler: RouteHandler<
  typeof postIpamFhrpGroupAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamFhrpGroupAssignmentsIndexRouteHandler: RouteHandler<
  typeof putIpamFhrpGroupAssignmentsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamFhrpGroupAssignmentsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamFhrpGroupAssignmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamFhrpGroupAssignmentsIdIndexRouteHandler: RouteHandler<
  typeof getIpamFhrpGroupAssignmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamFhrpGroupAssignmentsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamFhrpGroupAssignmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamFhrpGroupAssignmentsIdIndexRouteHandler: RouteHandler<
  typeof putIpamFhrpGroupAssignmentsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamFhrpGroupsIndexRouteHandler: RouteHandler<
  typeof deleteIpamFhrpGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamFhrpGroupsIndexRouteHandler: RouteHandler<
  typeof getIpamFhrpGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamFhrpGroupsIndexRouteHandler: RouteHandler<
  typeof patchIpamFhrpGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamFhrpGroupsIndexRouteHandler: RouteHandler<
  typeof postIpamFhrpGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamFhrpGroupsIndexRouteHandler: RouteHandler<
  typeof putIpamFhrpGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamFhrpGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamFhrpGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamFhrpGroupsIdIndexRouteHandler: RouteHandler<
  typeof getIpamFhrpGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamFhrpGroupsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamFhrpGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamFhrpGroupsIdIndexRouteHandler: RouteHandler<
  typeof putIpamFhrpGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamIpAddressesIndexRouteHandler: RouteHandler<
  typeof deleteIpamIpAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamIpAddressesIndexRouteHandler: RouteHandler<
  typeof getIpamIpAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamIpAddressesIndexRouteHandler: RouteHandler<
  typeof patchIpamIpAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamIpAddressesIndexRouteHandler: RouteHandler<
  typeof postIpamIpAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamIpAddressesIndexRouteHandler: RouteHandler<
  typeof putIpamIpAddressesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamIpAddressesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamIpAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamIpAddressesIdIndexRouteHandler: RouteHandler<
  typeof getIpamIpAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamIpAddressesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamIpAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamIpAddressesIdIndexRouteHandler: RouteHandler<
  typeof putIpamIpAddressesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamIpRangesIndexRouteHandler: RouteHandler<
  typeof deleteIpamIpRangesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamIpRangesIndexRouteHandler: RouteHandler<
  typeof getIpamIpRangesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamIpRangesIndexRouteHandler: RouteHandler<
  typeof patchIpamIpRangesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamIpRangesIndexRouteHandler: RouteHandler<
  typeof postIpamIpRangesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamIpRangesIndexRouteHandler: RouteHandler<
  typeof putIpamIpRangesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamIpRangesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamIpRangesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamIpRangesIdIndexRouteHandler: RouteHandler<
  typeof getIpamIpRangesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamIpRangesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamIpRangesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamIpRangesIdIndexRouteHandler: RouteHandler<
  typeof putIpamIpRangesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamIpRangesIdAvailableIpsIndexRouteHandler: RouteHandler<
  typeof getIpamIpRangesIdAvailableIpsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamIpRangesIdAvailableIpsIndexRouteHandler: RouteHandler<
  typeof postIpamIpRangesIdAvailableIpsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamL2vpnTerminationsIndexRouteHandler: RouteHandler<
  typeof deleteIpamL2vpnTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamL2vpnTerminationsIndexRouteHandler: RouteHandler<
  typeof getIpamL2vpnTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamL2vpnTerminationsIndexRouteHandler: RouteHandler<
  typeof patchIpamL2vpnTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamL2vpnTerminationsIndexRouteHandler: RouteHandler<
  typeof postIpamL2vpnTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamL2vpnTerminationsIndexRouteHandler: RouteHandler<
  typeof putIpamL2vpnTerminationsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamL2vpnTerminationsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamL2vpnTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamL2vpnTerminationsIdIndexRouteHandler: RouteHandler<
  typeof getIpamL2vpnTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamL2vpnTerminationsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamL2vpnTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamL2vpnTerminationsIdIndexRouteHandler: RouteHandler<
  typeof putIpamL2vpnTerminationsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamL2vpnsIndexRouteHandler: RouteHandler<
  typeof deleteIpamL2vpnsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamL2vpnsIndexRouteHandler: RouteHandler<typeof getIpamL2vpnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamL2vpnsIndexRouteHandler: RouteHandler<
  typeof patchIpamL2vpnsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamL2vpnsIndexRouteHandler: RouteHandler<
  typeof postIpamL2vpnsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamL2vpnsIndexRouteHandler: RouteHandler<typeof putIpamL2vpnsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamL2vpnsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamL2vpnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamL2vpnsIdIndexRouteHandler: RouteHandler<
  typeof getIpamL2vpnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamL2vpnsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamL2vpnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamL2vpnsIdIndexRouteHandler: RouteHandler<
  typeof putIpamL2vpnsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamPrefixesIndexRouteHandler: RouteHandler<
  typeof deleteIpamPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamPrefixesIndexRouteHandler: RouteHandler<
  typeof getIpamPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamPrefixesIndexRouteHandler: RouteHandler<
  typeof patchIpamPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamPrefixesIndexRouteHandler: RouteHandler<
  typeof postIpamPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamPrefixesIndexRouteHandler: RouteHandler<
  typeof putIpamPrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamPrefixesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamPrefixesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamPrefixesIdIndexRouteHandler: RouteHandler<
  typeof getIpamPrefixesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamPrefixesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamPrefixesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamPrefixesIdIndexRouteHandler: RouteHandler<
  typeof putIpamPrefixesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamPrefixesIdAvailableIpsIndexRouteHandler: RouteHandler<
  typeof getIpamPrefixesIdAvailableIpsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamPrefixesIdAvailableIpsIndexRouteHandler: RouteHandler<
  typeof postIpamPrefixesIdAvailableIpsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamPrefixesIdAvailablePrefixesIndexRouteHandler: RouteHandler<
  typeof getIpamPrefixesIdAvailablePrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamPrefixesIdAvailablePrefixesIndexRouteHandler: RouteHandler<
  typeof postIpamPrefixesIdAvailablePrefixesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamRirsIndexRouteHandler: RouteHandler<
  typeof deleteIpamRirsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRirsIndexRouteHandler: RouteHandler<typeof getIpamRirsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamRirsIndexRouteHandler: RouteHandler<typeof patchIpamRirsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpamRirsIndexRouteHandler: RouteHandler<typeof postIpamRirsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpamRirsIndexRouteHandler: RouteHandler<typeof putIpamRirsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamRirsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamRirsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRirsIdIndexRouteHandler: RouteHandler<typeof getIpamRirsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamRirsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamRirsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamRirsIdIndexRouteHandler: RouteHandler<typeof putIpamRirsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamRolesIndexRouteHandler: RouteHandler<
  typeof deleteIpamRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRolesIndexRouteHandler: RouteHandler<typeof getIpamRolesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamRolesIndexRouteHandler: RouteHandler<
  typeof patchIpamRolesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamRolesIndexRouteHandler: RouteHandler<typeof postIpamRolesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpamRolesIndexRouteHandler: RouteHandler<typeof putIpamRolesIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamRolesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRolesIdIndexRouteHandler: RouteHandler<
  typeof getIpamRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamRolesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamRolesIdIndexRouteHandler: RouteHandler<
  typeof putIpamRolesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamRouteTargetsIndexRouteHandler: RouteHandler<
  typeof deleteIpamRouteTargetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRouteTargetsIndexRouteHandler: RouteHandler<
  typeof getIpamRouteTargetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamRouteTargetsIndexRouteHandler: RouteHandler<
  typeof patchIpamRouteTargetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamRouteTargetsIndexRouteHandler: RouteHandler<
  typeof postIpamRouteTargetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamRouteTargetsIndexRouteHandler: RouteHandler<
  typeof putIpamRouteTargetsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamRouteTargetsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamRouteTargetsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamRouteTargetsIdIndexRouteHandler: RouteHandler<
  typeof getIpamRouteTargetsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamRouteTargetsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamRouteTargetsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamRouteTargetsIdIndexRouteHandler: RouteHandler<
  typeof putIpamRouteTargetsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamServiceTemplatesIndexRouteHandler: RouteHandler<
  typeof deleteIpamServiceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamServiceTemplatesIndexRouteHandler: RouteHandler<
  typeof getIpamServiceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamServiceTemplatesIndexRouteHandler: RouteHandler<
  typeof patchIpamServiceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamServiceTemplatesIndexRouteHandler: RouteHandler<
  typeof postIpamServiceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamServiceTemplatesIndexRouteHandler: RouteHandler<
  typeof putIpamServiceTemplatesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamServiceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamServiceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamServiceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof getIpamServiceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamServiceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamServiceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamServiceTemplatesIdIndexRouteHandler: RouteHandler<
  typeof putIpamServiceTemplatesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamServicesIndexRouteHandler: RouteHandler<
  typeof deleteIpamServicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamServicesIndexRouteHandler: RouteHandler<
  typeof getIpamServicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamServicesIndexRouteHandler: RouteHandler<
  typeof patchIpamServicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamServicesIndexRouteHandler: RouteHandler<
  typeof postIpamServicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamServicesIndexRouteHandler: RouteHandler<
  typeof putIpamServicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamServicesIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamServicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamServicesIdIndexRouteHandler: RouteHandler<
  typeof getIpamServicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamServicesIdIndexRouteHandler: RouteHandler<
  typeof patchIpamServicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamServicesIdIndexRouteHandler: RouteHandler<
  typeof putIpamServicesIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamVlanGroupsIndexRouteHandler: RouteHandler<
  typeof deleteIpamVlanGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVlanGroupsIndexRouteHandler: RouteHandler<
  typeof getIpamVlanGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamVlanGroupsIndexRouteHandler: RouteHandler<
  typeof patchIpamVlanGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamVlanGroupsIndexRouteHandler: RouteHandler<
  typeof postIpamVlanGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamVlanGroupsIndexRouteHandler: RouteHandler<
  typeof putIpamVlanGroupsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamVlanGroupsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamVlanGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVlanGroupsIdIndexRouteHandler: RouteHandler<
  typeof getIpamVlanGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamVlanGroupsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamVlanGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamVlanGroupsIdIndexRouteHandler: RouteHandler<
  typeof putIpamVlanGroupsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVlanGroupsIdAvailableVlansIndexRouteHandler: RouteHandler<
  typeof getIpamVlanGroupsIdAvailableVlansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamVlanGroupsIdAvailableVlansIndexRouteHandler: RouteHandler<
  typeof postIpamVlanGroupsIdAvailableVlansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamVlansIndexRouteHandler: RouteHandler<
  typeof deleteIpamVlansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVlansIndexRouteHandler: RouteHandler<typeof getIpamVlansIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamVlansIndexRouteHandler: RouteHandler<
  typeof patchIpamVlansIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postIpamVlansIndexRouteHandler: RouteHandler<typeof postIpamVlansIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpamVlansIndexRouteHandler: RouteHandler<typeof putIpamVlansIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamVlansIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamVlansIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVlansIdIndexRouteHandler: RouteHandler<
  typeof getIpamVlansIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchIpamVlansIdIndexRouteHandler: RouteHandler<
  typeof patchIpamVlansIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamVlansIdIndexRouteHandler: RouteHandler<
  typeof putIpamVlansIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteIpamVrfsIndexRouteHandler: RouteHandler<
  typeof deleteIpamVrfsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVrfsIndexRouteHandler: RouteHandler<typeof getIpamVrfsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamVrfsIndexRouteHandler: RouteHandler<typeof patchIpamVrfsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postIpamVrfsIndexRouteHandler: RouteHandler<typeof postIpamVrfsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putIpamVrfsIndexRouteHandler: RouteHandler<typeof putIpamVrfsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteIpamVrfsIdIndexRouteHandler: RouteHandler<
  typeof deleteIpamVrfsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getIpamVrfsIdIndexRouteHandler: RouteHandler<typeof getIpamVrfsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const patchIpamVrfsIdIndexRouteHandler: RouteHandler<
  typeof patchIpamVrfsIdIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putIpamVrfsIdIndexRouteHandler: RouteHandler<typeof putIpamVrfsIdIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
