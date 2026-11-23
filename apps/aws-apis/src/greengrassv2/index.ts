import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGreengrassServiceroleRoute,
  deleteGreengrassV2ComponentsArnRoute,
  deleteGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
  deleteGreengrassV2DeploymentsDeploymentIdRoute,
  deleteTagsResourceArnTagKeysRoute,
  getGreengrassServiceroleRoute,
  getGreengrassThingsThingNameConnectivityInfoRoute,
  getGreengrassV2ComponentsArnArtifactsArtifactNameRoute,
  getGreengrassV2ComponentsArnMetadataRoute,
  getGreengrassV2ComponentsArnRoute,
  getGreengrassV2ComponentsArnVersionsRoute,
  getGreengrassV2ComponentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRoute,
  getGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
  getGreengrassV2CoreDevicesRoute,
  getGreengrassV2DeploymentsDeploymentIdRoute,
  getGreengrassV2DeploymentsRoute,
  getTagsResourceArnRoute,
  postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRoute,
  postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRoute,
  postGreengrassV2CreateComponentVersionRoute,
  postGreengrassV2DeploymentsDeploymentIdCancelRoute,
  postGreengrassV2DeploymentsRoute,
  postGreengrassV2ResolveComponentCandidatesRoute,
  postTagsResourceArnRoute,
  putGreengrassServiceroleRoute,
  putGreengrassThingsThingNameConnectivityInfoRoute,
} from './routes'
import {
  deleteGreengrassServiceroleRouteHandler,
  deleteGreengrassV2ComponentsArnRouteHandler,
  deleteGreengrassV2CoreDevicesCoreDeviceThingNameRouteHandler,
  deleteGreengrassV2DeploymentsDeploymentIdRouteHandler,
  deleteTagsResourceArnTagKeysRouteHandler,
  getGreengrassServiceroleRouteHandler,
  getGreengrassThingsThingNameConnectivityInfoRouteHandler,
  getGreengrassV2ComponentsArnArtifactsArtifactNameRouteHandler,
  getGreengrassV2ComponentsArnMetadataRouteHandler,
  getGreengrassV2ComponentsArnRouteHandler,
  getGreengrassV2ComponentsArnVersionsRouteHandler,
  getGreengrassV2ComponentsRouteHandler,
  getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRouteHandler,
  getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRouteHandler,
  getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRouteHandler,
  getGreengrassV2CoreDevicesCoreDeviceThingNameRouteHandler,
  getGreengrassV2CoreDevicesRouteHandler,
  getGreengrassV2DeploymentsDeploymentIdRouteHandler,
  getGreengrassV2DeploymentsRouteHandler,
  getTagsResourceArnRouteHandler,
  postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRouteHandler,
  postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRouteHandler,
  postGreengrassV2CreateComponentVersionRouteHandler,
  postGreengrassV2DeploymentsDeploymentIdCancelRouteHandler,
  postGreengrassV2DeploymentsRouteHandler,
  postGreengrassV2ResolveComponentCandidatesRouteHandler,
  postTagsResourceArnRouteHandler,
  putGreengrassServiceroleRouteHandler,
  putGreengrassThingsThingNameConnectivityInfoRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(putGreengrassServiceroleRoute, putGreengrassServiceroleRouteHandler)
  .openapi(deleteGreengrassServiceroleRoute, deleteGreengrassServiceroleRouteHandler)
  .openapi(getGreengrassServiceroleRoute, getGreengrassServiceroleRouteHandler)
  .openapi(
    postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRoute,
    postGreengrassV2CoreDevicesCoreDeviceThingNameAssociateClientDevicesRouteHandler,
  )
  .openapi(
    postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRoute,
    postGreengrassV2CoreDevicesCoreDeviceThingNameDisassociateClientDevicesRouteHandler,
  )
  .openapi(
    postGreengrassV2DeploymentsDeploymentIdCancelRoute,
    postGreengrassV2DeploymentsDeploymentIdCancelRouteHandler,
  )
  .openapi(
    postGreengrassV2CreateComponentVersionRoute,
    postGreengrassV2CreateComponentVersionRouteHandler,
  )
  .openapi(postGreengrassV2DeploymentsRoute, postGreengrassV2DeploymentsRouteHandler)
  .openapi(getGreengrassV2DeploymentsRoute, getGreengrassV2DeploymentsRouteHandler)
  .openapi(deleteGreengrassV2ComponentsArnRoute, deleteGreengrassV2ComponentsArnRouteHandler)
  .openapi(getGreengrassV2ComponentsArnRoute, getGreengrassV2ComponentsArnRouteHandler)
  .openapi(
    deleteGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
    deleteGreengrassV2CoreDevicesCoreDeviceThingNameRouteHandler,
  )
  .openapi(
    getGreengrassV2CoreDevicesCoreDeviceThingNameRoute,
    getGreengrassV2CoreDevicesCoreDeviceThingNameRouteHandler,
  )
  .openapi(
    deleteGreengrassV2DeploymentsDeploymentIdRoute,
    deleteGreengrassV2DeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getGreengrassV2DeploymentsDeploymentIdRoute,
    getGreengrassV2DeploymentsDeploymentIdRouteHandler,
  )
  .openapi(
    getGreengrassV2ComponentsArnMetadataRoute,
    getGreengrassV2ComponentsArnMetadataRouteHandler,
  )
  .openapi(
    getGreengrassV2ComponentsArnArtifactsArtifactNameRoute,
    getGreengrassV2ComponentsArnArtifactsArtifactNameRouteHandler,
  )
  .openapi(
    getGreengrassThingsThingNameConnectivityInfoRoute,
    getGreengrassThingsThingNameConnectivityInfoRouteHandler,
  )
  .openapi(
    putGreengrassThingsThingNameConnectivityInfoRoute,
    putGreengrassThingsThingNameConnectivityInfoRouteHandler,
  )
  .openapi(
    getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRoute,
    getGreengrassV2CoreDevicesCoreDeviceThingNameAssociatedClientDevicesRouteHandler,
  )
  .openapi(
    getGreengrassV2ComponentsArnVersionsRoute,
    getGreengrassV2ComponentsArnVersionsRouteHandler,
  )
  .openapi(getGreengrassV2ComponentsRoute, getGreengrassV2ComponentsRouteHandler)
  .openapi(getGreengrassV2CoreDevicesRoute, getGreengrassV2CoreDevicesRouteHandler)
  .openapi(
    getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRoute,
    getGreengrassV2CoreDevicesCoreDeviceThingNameEffectiveDeploymentsRouteHandler,
  )
  .openapi(
    getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRoute,
    getGreengrassV2CoreDevicesCoreDeviceThingNameInstalledComponentsRouteHandler,
  )
  .openapi(getTagsResourceArnRoute, getTagsResourceArnRouteHandler)
  .openapi(postTagsResourceArnRoute, postTagsResourceArnRouteHandler)
  .openapi(
    postGreengrassV2ResolveComponentCandidatesRoute,
    postGreengrassV2ResolveComponentCandidatesRouteHandler,
  )
  .openapi(deleteTagsResourceArnTagKeysRoute, deleteTagsResourceArnTagKeysRouteHandler)

export default app
