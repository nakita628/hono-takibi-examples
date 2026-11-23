import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1alpha1NameRoute,
  getV1alpha1CustomersRoute,
  getV1alpha1NameRoute,
  getV1alpha1ParentDeploymentsRoute,
  getV1alpha1ParentDevicesRoute,
  getV1alpha1ParentNodesRoute,
  patchV1alpha1NameRoute,
  patchV1alpha1NameUpdateSignedRoute,
  postV1alpha1CustomersProvisionDeploymentRoute,
  postV1alpha1InstallerGenerateSecretRoute,
  postV1alpha1InstallerValidateRoute,
  postV1alpha1NameMoveRoute,
  postV1alpha1NameSignDeviceRoute,
  postV1alpha1ParentDeploymentsRoute,
  postV1alpha1ParentDevicesCreateSignedRoute,
  postV1alpha1ParentDevicesRoute,
  postV1alpha1ParentNodesRoute,
  postV1alpha1PoliciesGetRoute,
  postV1alpha1PoliciesSetRoute,
  postV1alpha1PoliciesTestRoute,
} from './routes'
import {
  deleteV1alpha1NameRouteHandler,
  getV1alpha1CustomersRouteHandler,
  getV1alpha1NameRouteHandler,
  getV1alpha1ParentDeploymentsRouteHandler,
  getV1alpha1ParentDevicesRouteHandler,
  getV1alpha1ParentNodesRouteHandler,
  patchV1alpha1NameRouteHandler,
  patchV1alpha1NameUpdateSignedRouteHandler,
  postV1alpha1CustomersProvisionDeploymentRouteHandler,
  postV1alpha1InstallerGenerateSecretRouteHandler,
  postV1alpha1InstallerValidateRouteHandler,
  postV1alpha1NameMoveRouteHandler,
  postV1alpha1NameSignDeviceRouteHandler,
  postV1alpha1ParentDeploymentsRouteHandler,
  postV1alpha1ParentDevicesCreateSignedRouteHandler,
  postV1alpha1ParentDevicesRouteHandler,
  postV1alpha1ParentNodesRouteHandler,
  postV1alpha1PoliciesGetRouteHandler,
  postV1alpha1PoliciesSetRouteHandler,
  postV1alpha1PoliciesTestRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getV1alpha1CustomersRoute, getV1alpha1CustomersRouteHandler)
  .openapi(
    postV1alpha1CustomersProvisionDeploymentRoute,
    postV1alpha1CustomersProvisionDeploymentRouteHandler,
  )
  .openapi(
    postV1alpha1InstallerGenerateSecretRoute,
    postV1alpha1InstallerGenerateSecretRouteHandler,
  )
  .openapi(postV1alpha1InstallerValidateRoute, postV1alpha1InstallerValidateRouteHandler)
  .openapi(postV1alpha1PoliciesGetRoute, postV1alpha1PoliciesGetRouteHandler)
  .openapi(postV1alpha1PoliciesSetRoute, postV1alpha1PoliciesSetRouteHandler)
  .openapi(postV1alpha1PoliciesTestRoute, postV1alpha1PoliciesTestRouteHandler)
  .openapi(deleteV1alpha1NameRoute, deleteV1alpha1NameRouteHandler)
  .openapi(getV1alpha1NameRoute, getV1alpha1NameRouteHandler)
  .openapi(patchV1alpha1NameRoute, patchV1alpha1NameRouteHandler)
  .openapi(postV1alpha1NameMoveRoute, postV1alpha1NameMoveRouteHandler)
  .openapi(postV1alpha1NameSignDeviceRoute, postV1alpha1NameSignDeviceRouteHandler)
  .openapi(patchV1alpha1NameUpdateSignedRoute, patchV1alpha1NameUpdateSignedRouteHandler)
  .openapi(getV1alpha1ParentDeploymentsRoute, getV1alpha1ParentDeploymentsRouteHandler)
  .openapi(postV1alpha1ParentDeploymentsRoute, postV1alpha1ParentDeploymentsRouteHandler)
  .openapi(getV1alpha1ParentDevicesRoute, getV1alpha1ParentDevicesRouteHandler)
  .openapi(postV1alpha1ParentDevicesRoute, postV1alpha1ParentDevicesRouteHandler)
  .openapi(
    postV1alpha1ParentDevicesCreateSignedRoute,
    postV1alpha1ParentDevicesCreateSignedRouteHandler,
  )
  .openapi(getV1alpha1ParentNodesRoute, getV1alpha1ParentNodesRouteHandler)
  .openapi(postV1alpha1ParentNodesRoute, postV1alpha1ParentNodesRouteHandler)

export default app
