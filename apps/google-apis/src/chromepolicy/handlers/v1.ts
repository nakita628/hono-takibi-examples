import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1NameRoute,
  getV1ParentPolicySchemasRoute,
  postV1CustomerPoliciesFilesUploadPolicyFileRoute,
  postV1CustomerPoliciesGroupsBatchDeleteRoute,
  postV1CustomerPoliciesGroupsBatchModifyRoute,
  postV1CustomerPoliciesGroupsListGroupPriorityOrderingRoute,
  postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRoute,
  postV1CustomerPoliciesNetworksDefineCertificateRoute,
  postV1CustomerPoliciesNetworksDefineNetworkRoute,
  postV1CustomerPoliciesNetworksRemoveCertificateRoute,
  postV1CustomerPoliciesNetworksRemoveNetworkRoute,
  postV1CustomerPoliciesOrgunitsBatchInheritRoute,
  postV1CustomerPoliciesOrgunitsBatchModifyRoute,
  postV1CustomerPoliciesResolveRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(postV1CustomerPoliciesFilesUploadPolicyFileRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesGroupsBatchDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesGroupsBatchModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesGroupsListGroupPriorityOrderingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesNetworksDefineCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesNetworksDefineNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesNetworksRemoveCertificateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesNetworksRemoveNetworkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesOrgunitsBatchInheritRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesOrgunitsBatchModifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerPoliciesResolveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ParentPolicySchemasRoute, (c) => {
    throw new Error('Not implemented')
  })
