import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1AddressGroupListReferencesRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentAddressGroupsRoute,
  getV1beta1ParentAuthorizationPoliciesRoute,
  getV1beta1ParentClientTlsPoliciesRoute,
  getV1beta1ParentGatewaySecurityPoliciesRoute,
  getV1beta1ParentRulesRoute,
  getV1beta1ParentServerTlsPoliciesRoute,
  getV1beta1ParentTlsInspectionPoliciesRoute,
  getV1beta1ParentUrlListsRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1AddressGroupAddItemsRoute,
  postV1beta1AddressGroupCloneItemsRoute,
  postV1beta1AddressGroupRemoveItemsRoute,
  postV1beta1NameCancelRoute,
  postV1beta1ParentAddressGroupsRoute,
  postV1beta1ParentAuthorizationPoliciesRoute,
  postV1beta1ParentClientTlsPoliciesRoute,
  postV1beta1ParentGatewaySecurityPoliciesRoute,
  postV1beta1ParentRulesRoute,
  postV1beta1ParentServerTlsPoliciesRoute,
  postV1beta1ParentTlsInspectionPoliciesRoute,
  postV1beta1ParentUrlListsRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectsHandler = app
  .openapi(postV1beta1AddressGroupAddItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AddressGroupCloneItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1AddressGroupListReferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1AddressGroupRemoveItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1beta1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1NameOperationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1NameCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAddressGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAddressGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentAuthorizationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentAuthorizationPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentClientTlsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentClientTlsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentGatewaySecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentGatewaySecurityPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentServerTlsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentServerTlsPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentTlsInspectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentTlsInspectionPoliciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ParentUrlListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ParentUrlListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1beta1ResourceGetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceSetIamPolicyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1beta1ResourceTestIamPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
