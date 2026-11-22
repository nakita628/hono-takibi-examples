import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsCountRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsCountRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
  getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
  patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
  postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
  postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const servicePrincipalsRemoteDesktopSecurityConfigurationHandler = app
  .openapi(getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsApprovedClientAppIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationApprovedClientAppsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsTargetDeviceGroupIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getServicePrincipalsServicePrincipalIdRemoteDesktopSecurityConfigurationTargetDeviceGroupsCountRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
