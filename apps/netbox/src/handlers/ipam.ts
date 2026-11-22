import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiIpamAggregatesIdIndexRoute,
  deleteApiIpamAggregatesIndexRoute,
  deleteApiIpamAsnRangesIdIndexRoute,
  deleteApiIpamAsnRangesIndexRoute,
  deleteApiIpamAsnsIdIndexRoute,
  deleteApiIpamAsnsIndexRoute,
  deleteApiIpamFhrpGroupAssignmentsIdIndexRoute,
  deleteApiIpamFhrpGroupAssignmentsIndexRoute,
  deleteApiIpamFhrpGroupsIdIndexRoute,
  deleteApiIpamFhrpGroupsIndexRoute,
  deleteApiIpamIpAddressesIdIndexRoute,
  deleteApiIpamIpAddressesIndexRoute,
  deleteApiIpamIpRangesIdIndexRoute,
  deleteApiIpamIpRangesIndexRoute,
  deleteApiIpamPrefixesIdIndexRoute,
  deleteApiIpamPrefixesIndexRoute,
  deleteApiIpamRirsIdIndexRoute,
  deleteApiIpamRirsIndexRoute,
  deleteApiIpamRolesIdIndexRoute,
  deleteApiIpamRolesIndexRoute,
  deleteApiIpamRouteTargetsIdIndexRoute,
  deleteApiIpamRouteTargetsIndexRoute,
  deleteApiIpamServicesIdIndexRoute,
  deleteApiIpamServicesIndexRoute,
  deleteApiIpamServiceTemplatesIdIndexRoute,
  deleteApiIpamServiceTemplatesIndexRoute,
  deleteApiIpamVlanGroupsIdIndexRoute,
  deleteApiIpamVlanGroupsIndexRoute,
  deleteApiIpamVlansIdIndexRoute,
  deleteApiIpamVlansIndexRoute,
  deleteApiIpamVlanTranslationPoliciesIdIndexRoute,
  deleteApiIpamVlanTranslationPoliciesIndexRoute,
  deleteApiIpamVlanTranslationRulesIdIndexRoute,
  deleteApiIpamVlanTranslationRulesIndexRoute,
  deleteApiIpamVrfsIdIndexRoute,
  deleteApiIpamVrfsIndexRoute,
  getApiIpamAggregatesIdIndexRoute,
  getApiIpamAggregatesIndexRoute,
  getApiIpamAsnRangesIdAvailableAsnsIndexRoute,
  getApiIpamAsnRangesIdIndexRoute,
  getApiIpamAsnRangesIndexRoute,
  getApiIpamAsnsIdIndexRoute,
  getApiIpamAsnsIndexRoute,
  getApiIpamFhrpGroupAssignmentsIdIndexRoute,
  getApiIpamFhrpGroupAssignmentsIndexRoute,
  getApiIpamFhrpGroupsIdIndexRoute,
  getApiIpamFhrpGroupsIndexRoute,
  getApiIpamIpAddressesIdIndexRoute,
  getApiIpamIpAddressesIndexRoute,
  getApiIpamIpRangesIdAvailableIpsIndexRoute,
  getApiIpamIpRangesIdIndexRoute,
  getApiIpamIpRangesIndexRoute,
  getApiIpamPrefixesIdAvailableIpsIndexRoute,
  getApiIpamPrefixesIdAvailablePrefixesIndexRoute,
  getApiIpamPrefixesIdIndexRoute,
  getApiIpamPrefixesIndexRoute,
  getApiIpamRirsIdIndexRoute,
  getApiIpamRirsIndexRoute,
  getApiIpamRolesIdIndexRoute,
  getApiIpamRolesIndexRoute,
  getApiIpamRouteTargetsIdIndexRoute,
  getApiIpamRouteTargetsIndexRoute,
  getApiIpamServicesIdIndexRoute,
  getApiIpamServicesIndexRoute,
  getApiIpamServiceTemplatesIdIndexRoute,
  getApiIpamServiceTemplatesIndexRoute,
  getApiIpamVlanGroupsIdAvailableVlansIndexRoute,
  getApiIpamVlanGroupsIdIndexRoute,
  getApiIpamVlanGroupsIndexRoute,
  getApiIpamVlansIdIndexRoute,
  getApiIpamVlansIndexRoute,
  getApiIpamVlanTranslationPoliciesIdIndexRoute,
  getApiIpamVlanTranslationPoliciesIndexRoute,
  getApiIpamVlanTranslationRulesIdIndexRoute,
  getApiIpamVlanTranslationRulesIndexRoute,
  getApiIpamVrfsIdIndexRoute,
  getApiIpamVrfsIndexRoute,
  patchApiIpamAggregatesIdIndexRoute,
  patchApiIpamAggregatesIndexRoute,
  patchApiIpamAsnRangesIdIndexRoute,
  patchApiIpamAsnRangesIndexRoute,
  patchApiIpamAsnsIdIndexRoute,
  patchApiIpamAsnsIndexRoute,
  patchApiIpamFhrpGroupAssignmentsIdIndexRoute,
  patchApiIpamFhrpGroupAssignmentsIndexRoute,
  patchApiIpamFhrpGroupsIdIndexRoute,
  patchApiIpamFhrpGroupsIndexRoute,
  patchApiIpamIpAddressesIdIndexRoute,
  patchApiIpamIpAddressesIndexRoute,
  patchApiIpamIpRangesIdIndexRoute,
  patchApiIpamIpRangesIndexRoute,
  patchApiIpamPrefixesIdIndexRoute,
  patchApiIpamPrefixesIndexRoute,
  patchApiIpamRirsIdIndexRoute,
  patchApiIpamRirsIndexRoute,
  patchApiIpamRolesIdIndexRoute,
  patchApiIpamRolesIndexRoute,
  patchApiIpamRouteTargetsIdIndexRoute,
  patchApiIpamRouteTargetsIndexRoute,
  patchApiIpamServicesIdIndexRoute,
  patchApiIpamServicesIndexRoute,
  patchApiIpamServiceTemplatesIdIndexRoute,
  patchApiIpamServiceTemplatesIndexRoute,
  patchApiIpamVlanGroupsIdIndexRoute,
  patchApiIpamVlanGroupsIndexRoute,
  patchApiIpamVlansIdIndexRoute,
  patchApiIpamVlansIndexRoute,
  patchApiIpamVlanTranslationPoliciesIdIndexRoute,
  patchApiIpamVlanTranslationPoliciesIndexRoute,
  patchApiIpamVlanTranslationRulesIdIndexRoute,
  patchApiIpamVlanTranslationRulesIndexRoute,
  patchApiIpamVrfsIdIndexRoute,
  patchApiIpamVrfsIndexRoute,
  postApiIpamAggregatesIndexRoute,
  postApiIpamAsnRangesIdAvailableAsnsIndexRoute,
  postApiIpamAsnRangesIndexRoute,
  postApiIpamAsnsIndexRoute,
  postApiIpamFhrpGroupAssignmentsIndexRoute,
  postApiIpamFhrpGroupsIndexRoute,
  postApiIpamIpAddressesIndexRoute,
  postApiIpamIpRangesIdAvailableIpsIndexRoute,
  postApiIpamIpRangesIndexRoute,
  postApiIpamPrefixesIdAvailableIpsIndexRoute,
  postApiIpamPrefixesIdAvailablePrefixesIndexRoute,
  postApiIpamPrefixesIndexRoute,
  postApiIpamRirsIndexRoute,
  postApiIpamRolesIndexRoute,
  postApiIpamRouteTargetsIndexRoute,
  postApiIpamServicesIndexRoute,
  postApiIpamServiceTemplatesIndexRoute,
  postApiIpamVlanGroupsIdAvailableVlansIndexRoute,
  postApiIpamVlanGroupsIndexRoute,
  postApiIpamVlansIndexRoute,
  postApiIpamVlanTranslationPoliciesIndexRoute,
  postApiIpamVlanTranslationRulesIndexRoute,
  postApiIpamVrfsIndexRoute,
  putApiIpamAggregatesIdIndexRoute,
  putApiIpamAggregatesIndexRoute,
  putApiIpamAsnRangesIdIndexRoute,
  putApiIpamAsnRangesIndexRoute,
  putApiIpamAsnsIdIndexRoute,
  putApiIpamAsnsIndexRoute,
  putApiIpamFhrpGroupAssignmentsIdIndexRoute,
  putApiIpamFhrpGroupAssignmentsIndexRoute,
  putApiIpamFhrpGroupsIdIndexRoute,
  putApiIpamFhrpGroupsIndexRoute,
  putApiIpamIpAddressesIdIndexRoute,
  putApiIpamIpAddressesIndexRoute,
  putApiIpamIpRangesIdIndexRoute,
  putApiIpamIpRangesIndexRoute,
  putApiIpamPrefixesIdIndexRoute,
  putApiIpamPrefixesIndexRoute,
  putApiIpamRirsIdIndexRoute,
  putApiIpamRirsIndexRoute,
  putApiIpamRolesIdIndexRoute,
  putApiIpamRolesIndexRoute,
  putApiIpamRouteTargetsIdIndexRoute,
  putApiIpamRouteTargetsIndexRoute,
  putApiIpamServicesIdIndexRoute,
  putApiIpamServicesIndexRoute,
  putApiIpamServiceTemplatesIdIndexRoute,
  putApiIpamServiceTemplatesIndexRoute,
  putApiIpamVlanGroupsIdIndexRoute,
  putApiIpamVlanGroupsIndexRoute,
  putApiIpamVlansIdIndexRoute,
  putApiIpamVlansIndexRoute,
  putApiIpamVlanTranslationPoliciesIdIndexRoute,
  putApiIpamVlanTranslationPoliciesIndexRoute,
  putApiIpamVlanTranslationRulesIdIndexRoute,
  putApiIpamVlanTranslationRulesIndexRoute,
  putApiIpamVrfsIdIndexRoute,
  putApiIpamVrfsIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ipamHandler = app
  .openapi(getApiIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAggregatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAggregatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAsnRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamAsnRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAsnRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAsnRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAsnRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAsnRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAsnRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAsnRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAsnRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAsnRangesIdAvailableAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamAsnRangesIdAvailableAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAsnsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamAsnsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamFhrpGroupAssignmentsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamFhrpGroupAssignmentsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamFhrpGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamFhrpGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamIpAddressesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamIpAddressesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamIpRangesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamIpRangesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamIpRangesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamIpRangesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamPrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamPrefixesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamPrefixesIdAvailableIpsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamPrefixesIdAvailablePrefixesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRirsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRirsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRolesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRolesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRouteTargetsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamRouteTargetsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamServiceTemplatesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamServiceTemplatesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamServicesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanGroupsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanGroupsIdAvailableVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVlanGroupsIdAvailableVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanTranslationPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVlanTranslationPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanTranslationPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanTranslationPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanTranslationPoliciesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanTranslationPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanTranslationPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanTranslationPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanTranslationPoliciesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanTranslationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVlanTranslationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanTranslationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanTranslationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanTranslationRulesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlanTranslationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlanTranslationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlanTranslationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlanTranslationRulesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlansIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVlansIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVrfsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchApiIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiIpamVrfsIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
