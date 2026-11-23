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
} from './routes'
import {
  getV1NameRouteHandler,
  getV1ParentPolicySchemasRouteHandler,
  postV1CustomerPoliciesFilesUploadPolicyFileRouteHandler,
  postV1CustomerPoliciesGroupsBatchDeleteRouteHandler,
  postV1CustomerPoliciesGroupsBatchModifyRouteHandler,
  postV1CustomerPoliciesGroupsListGroupPriorityOrderingRouteHandler,
  postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRouteHandler,
  postV1CustomerPoliciesNetworksDefineCertificateRouteHandler,
  postV1CustomerPoliciesNetworksDefineNetworkRouteHandler,
  postV1CustomerPoliciesNetworksRemoveCertificateRouteHandler,
  postV1CustomerPoliciesNetworksRemoveNetworkRouteHandler,
  postV1CustomerPoliciesOrgunitsBatchInheritRouteHandler,
  postV1CustomerPoliciesOrgunitsBatchModifyRouteHandler,
  postV1CustomerPoliciesResolveRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    postV1CustomerPoliciesFilesUploadPolicyFileRoute,
    postV1CustomerPoliciesFilesUploadPolicyFileRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesGroupsBatchDeleteRoute,
    postV1CustomerPoliciesGroupsBatchDeleteRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesGroupsBatchModifyRoute,
    postV1CustomerPoliciesGroupsBatchModifyRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesGroupsListGroupPriorityOrderingRoute,
    postV1CustomerPoliciesGroupsListGroupPriorityOrderingRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRoute,
    postV1CustomerPoliciesGroupsUpdateGroupPriorityOrderingRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesNetworksDefineCertificateRoute,
    postV1CustomerPoliciesNetworksDefineCertificateRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesNetworksDefineNetworkRoute,
    postV1CustomerPoliciesNetworksDefineNetworkRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesNetworksRemoveCertificateRoute,
    postV1CustomerPoliciesNetworksRemoveCertificateRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesNetworksRemoveNetworkRoute,
    postV1CustomerPoliciesNetworksRemoveNetworkRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesOrgunitsBatchInheritRoute,
    postV1CustomerPoliciesOrgunitsBatchInheritRouteHandler,
  )
  .openapi(
    postV1CustomerPoliciesOrgunitsBatchModifyRoute,
    postV1CustomerPoliciesOrgunitsBatchModifyRouteHandler,
  )
  .openapi(postV1CustomerPoliciesResolveRoute, postV1CustomerPoliciesResolveRouteHandler)
  .openapi(getV1NameRoute, getV1NameRouteHandler)
  .openapi(getV1ParentPolicySchemasRoute, getV1ParentPolicySchemasRouteHandler)

export default app
