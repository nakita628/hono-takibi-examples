import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1beta1NameRoute,
  getV1beta1NameLocationsRoute,
  getV1beta1NameOperationsRoute,
  getV1beta1NameRoute,
  getV1beta1ParentEndpointPoliciesRoute,
  getV1beta1ParentGatewaysRoute,
  getV1beta1ParentGrpcRoutesRoute,
  getV1beta1ParentHttpRoutesRoute,
  getV1beta1ParentMeshesRoute,
  getV1beta1ParentServiceBindingsRoute,
  getV1beta1ParentTcpRoutesRoute,
  getV1beta1ParentTlsRoutesRoute,
  getV1beta1ResourceGetIamPolicyRoute,
  patchV1beta1NameRoute,
  postV1beta1NameCancelRoute,
  postV1beta1ParentEndpointPoliciesRoute,
  postV1beta1ParentGatewaysRoute,
  postV1beta1ParentGrpcRoutesRoute,
  postV1beta1ParentHttpRoutesRoute,
  postV1beta1ParentMeshesRoute,
  postV1beta1ParentServiceBindingsRoute,
  postV1beta1ParentTcpRoutesRoute,
  postV1beta1ParentTlsRoutesRoute,
  postV1beta1ResourceSetIamPolicyRoute,
  postV1beta1ResourceTestIamPermissionsRoute,
} from './routes'
import {
  deleteV1beta1NameRouteHandler,
  getV1beta1NameLocationsRouteHandler,
  getV1beta1NameOperationsRouteHandler,
  getV1beta1NameRouteHandler,
  getV1beta1ParentEndpointPoliciesRouteHandler,
  getV1beta1ParentGatewaysRouteHandler,
  getV1beta1ParentGrpcRoutesRouteHandler,
  getV1beta1ParentHttpRoutesRouteHandler,
  getV1beta1ParentMeshesRouteHandler,
  getV1beta1ParentServiceBindingsRouteHandler,
  getV1beta1ParentTcpRoutesRouteHandler,
  getV1beta1ParentTlsRoutesRouteHandler,
  getV1beta1ResourceGetIamPolicyRouteHandler,
  patchV1beta1NameRouteHandler,
  postV1beta1NameCancelRouteHandler,
  postV1beta1ParentEndpointPoliciesRouteHandler,
  postV1beta1ParentGatewaysRouteHandler,
  postV1beta1ParentGrpcRoutesRouteHandler,
  postV1beta1ParentHttpRoutesRouteHandler,
  postV1beta1ParentMeshesRouteHandler,
  postV1beta1ParentServiceBindingsRouteHandler,
  postV1beta1ParentTcpRoutesRouteHandler,
  postV1beta1ParentTlsRoutesRouteHandler,
  postV1beta1ResourceSetIamPolicyRouteHandler,
  postV1beta1ResourceTestIamPermissionsRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(deleteV1beta1NameRoute, deleteV1beta1NameRouteHandler)
  .openapi(getV1beta1NameRoute, getV1beta1NameRouteHandler)
  .openapi(patchV1beta1NameRoute, patchV1beta1NameRouteHandler)
  .openapi(getV1beta1NameLocationsRoute, getV1beta1NameLocationsRouteHandler)
  .openapi(getV1beta1NameOperationsRoute, getV1beta1NameOperationsRouteHandler)
  .openapi(postV1beta1NameCancelRoute, postV1beta1NameCancelRouteHandler)
  .openapi(getV1beta1ParentEndpointPoliciesRoute, getV1beta1ParentEndpointPoliciesRouteHandler)
  .openapi(postV1beta1ParentEndpointPoliciesRoute, postV1beta1ParentEndpointPoliciesRouteHandler)
  .openapi(getV1beta1ParentGatewaysRoute, getV1beta1ParentGatewaysRouteHandler)
  .openapi(postV1beta1ParentGatewaysRoute, postV1beta1ParentGatewaysRouteHandler)
  .openapi(getV1beta1ParentGrpcRoutesRoute, getV1beta1ParentGrpcRoutesRouteHandler)
  .openapi(postV1beta1ParentGrpcRoutesRoute, postV1beta1ParentGrpcRoutesRouteHandler)
  .openapi(getV1beta1ParentHttpRoutesRoute, getV1beta1ParentHttpRoutesRouteHandler)
  .openapi(postV1beta1ParentHttpRoutesRoute, postV1beta1ParentHttpRoutesRouteHandler)
  .openapi(getV1beta1ParentMeshesRoute, getV1beta1ParentMeshesRouteHandler)
  .openapi(postV1beta1ParentMeshesRoute, postV1beta1ParentMeshesRouteHandler)
  .openapi(getV1beta1ParentServiceBindingsRoute, getV1beta1ParentServiceBindingsRouteHandler)
  .openapi(postV1beta1ParentServiceBindingsRoute, postV1beta1ParentServiceBindingsRouteHandler)
  .openapi(getV1beta1ParentTcpRoutesRoute, getV1beta1ParentTcpRoutesRouteHandler)
  .openapi(postV1beta1ParentTcpRoutesRoute, postV1beta1ParentTcpRoutesRouteHandler)
  .openapi(getV1beta1ParentTlsRoutesRoute, getV1beta1ParentTlsRoutesRouteHandler)
  .openapi(postV1beta1ParentTlsRoutesRoute, postV1beta1ParentTlsRoutesRouteHandler)
  .openapi(getV1beta1ResourceGetIamPolicyRoute, getV1beta1ResourceGetIamPolicyRouteHandler)
  .openapi(postV1beta1ResourceSetIamPolicyRoute, postV1beta1ResourceSetIamPolicyRouteHandler)
  .openapi(
    postV1beta1ResourceTestIamPermissionsRoute,
    postV1beta1ResourceTestIamPermissionsRouteHandler,
  )

export default app
