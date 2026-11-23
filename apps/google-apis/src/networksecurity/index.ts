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
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1AddressGroupListReferencesRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentAddressGroupsRouteHandler,
  getV1beta1ParentAuthorizationPoliciesRouteHandler,
  getV1beta1ParentClientTlsPoliciesRouteHandler,
  getV1beta1ParentGatewaySecurityPoliciesRouteHandler,
  getV1beta1ParentRulesRouteHandler,
  getV1beta1ParentServerTlsPoliciesRouteHandler,
  getV1beta1ParentTlsInspectionPoliciesRouteHandler,
  getV1beta1ParentUrlListsRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1AddressGroupAddItemsRouteHandler,
  postV1beta1AddressGroupCloneItemsRouteHandler,
  postV1beta1AddressGroupRemoveItemsRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1ParentAddressGroupsRouteHandler,
  postV1beta1ParentAuthorizationPoliciesRouteHandler,
  postV1beta1ParentClientTlsPoliciesRouteHandler,
  postV1beta1ParentGatewaySecurityPoliciesRouteHandler,
  postV1beta1ParentRulesRouteHandler,
  postV1beta1ParentServerTlsPoliciesRouteHandler,
  postV1beta1ParentTlsInspectionPoliciesRouteHandler,
  postV1beta1ParentUrlListsRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postV1beta1AddressGroupAddItemsRoute, postV1beta1AddressGroupAddItemsRouteHandler)
  .openapi(postV1beta1AddressGroupCloneItemsRoute, postV1beta1AddressGroupCloneItemsRouteHandler)
  .openapi(
    getV1beta1AddressGroupListReferencesRoute,
    getV1beta1AddressGroupListReferencesRouteHandler,
  )
  .openapi(postV1beta1AddressGroupRemoveItemsRoute, postV1beta1AddressGroupRemoveItemsRouteHandler)
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(getV1beta1ParentAddressGroupsRoute, getV1beta1ParentAddressGroupsRouteHandler)
  .openapi(postV1beta1ParentAddressGroupsRoute, postV1beta1ParentAddressGroupsRouteHandler)
  .openapi(
    getV1beta1ParentAuthorizationPoliciesRoute,
    getV1beta1ParentAuthorizationPoliciesRouteHandler,
  )
  .openapi(
    postV1beta1ParentAuthorizationPoliciesRoute,
    postV1beta1ParentAuthorizationPoliciesRouteHandler,
  )
  .openapi(getV1beta1ParentClientTlsPoliciesRoute, getV1beta1ParentClientTlsPoliciesRouteHandler)
  .openapi(postV1beta1ParentClientTlsPoliciesRoute, postV1beta1ParentClientTlsPoliciesRouteHandler)
  .openapi(
    getV1beta1ParentGatewaySecurityPoliciesRoute,
    getV1beta1ParentGatewaySecurityPoliciesRouteHandler,
  )
  .openapi(
    postV1beta1ParentGatewaySecurityPoliciesRoute,
    postV1beta1ParentGatewaySecurityPoliciesRouteHandler,
  )
  .openapi(getV1beta1ParentRulesRoute, getV1beta1ParentRulesRouteHandler)
  .openapi(postV1beta1ParentRulesRoute, postV1beta1ParentRulesRouteHandler)
  .openapi(getV1beta1ParentServerTlsPoliciesRoute, getV1beta1ParentServerTlsPoliciesRouteHandler)
  .openapi(postV1beta1ParentServerTlsPoliciesRoute, postV1beta1ParentServerTlsPoliciesRouteHandler)
  .openapi(
    getV1beta1ParentTlsInspectionPoliciesRoute,
    getV1beta1ParentTlsInspectionPoliciesRouteHandler,
  )
  .openapi(
    postV1beta1ParentTlsInspectionPoliciesRoute,
    postV1beta1ParentTlsInspectionPoliciesRouteHandler,
  )
  .openapi(getV1beta1ParentUrlListsRoute, getV1beta1ParentUrlListsRouteHandler)
  .openapi(postV1beta1ParentUrlListsRoute, postV1beta1ParentUrlListsRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
