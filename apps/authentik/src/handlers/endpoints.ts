import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteEndpointsAgentsConnectorsConnectorUuidIndexRoute,
  deleteEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute,
  deleteEndpointsAgentsPssoIseUuidIndexRoute,
  deleteEndpointsAgentsPssoRegisterDeviceIndexRoute,
  deleteEndpointsConnectorsConnectorUuidIndexRoute,
  deleteEndpointsDeviceAccessGroupsPbmUuidIndexRoute,
  deleteEndpointsDeviceBindingsPolicyBindingUuidIndexRoute,
  deleteEndpointsDevicesDeviceUuidIndexRoute,
  deleteEndpointsFleetConnectorsConnectorUuidIndexRoute,
  deleteEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute,
  deleteEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute,
  getEndpointsAgentsConnectorsAgentConfigIndexRoute,
  getEndpointsAgentsConnectorsConnectorUuidIndexRoute,
  getEndpointsAgentsConnectorsConnectorUuidUsedByIndexRoute,
  getEndpointsAgentsConnectorsIndexRoute,
  getEndpointsAgentsEnrollmentTokensIndexRoute,
  getEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute,
  getEndpointsAgentsEnrollmentTokensTokenUuidUsedByIndexRoute,
  getEndpointsAgentsEnrollmentTokensTokenUuidViewKeyIndexRoute,
  getEndpointsAgentsPssoIseIndexRoute,
  getEndpointsAgentsPssoIseUuidIndexRoute,
  getEndpointsAgentsPssoIseUuidUsedByIndexRoute,
  getEndpointsAgentsPssoRegisterDeviceIndexRoute,
  getEndpointsConnectorsConnectorUuidIndexRoute,
  getEndpointsConnectorsConnectorUuidUsedByIndexRoute,
  getEndpointsConnectorsIndexRoute,
  getEndpointsConnectorsTypesIndexRoute,
  getEndpointsDeviceAccessGroupsIndexRoute,
  getEndpointsDeviceAccessGroupsPbmUuidIndexRoute,
  getEndpointsDeviceAccessGroupsPbmUuidUsedByIndexRoute,
  getEndpointsDeviceBindingsIndexRoute,
  getEndpointsDeviceBindingsPolicyBindingUuidIndexRoute,
  getEndpointsDeviceBindingsPolicyBindingUuidUsedByIndexRoute,
  getEndpointsDevicesDeviceUuidIndexRoute,
  getEndpointsDevicesDeviceUuidUsedByIndexRoute,
  getEndpointsDevicesIndexRoute,
  getEndpointsDevicesSummaryIndexRoute,
  getEndpointsFleetConnectorsConnectorUuidIndexRoute,
  getEndpointsFleetConnectorsConnectorUuidUsedByIndexRoute,
  getEndpointsFleetConnectorsIndexRoute,
  getEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute,
  getEndpointsGoogleChromeConnectorsConnectorUuidUsedByIndexRoute,
  getEndpointsGoogleChromeConnectorsIndexRoute,
  getEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute,
  getEndpointsMicrosoftIntuneConnectorsConnectorUuidUsedByIndexRoute,
  getEndpointsMicrosoftIntuneConnectorsIndexRoute,
  patchEndpointsAgentsConnectorsConnectorUuidIndexRoute,
  patchEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute,
  patchEndpointsAgentsPssoIseUuidIndexRoute,
  patchEndpointsDeviceAccessGroupsPbmUuidIndexRoute,
  patchEndpointsDeviceBindingsPolicyBindingUuidIndexRoute,
  patchEndpointsDevicesDeviceUuidIndexRoute,
  patchEndpointsFleetConnectorsConnectorUuidIndexRoute,
  patchEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute,
  patchEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute,
  postEndpointsAgentsConnectorsAuthFedIndexRoute,
  postEndpointsAgentsConnectorsAuthIaIndexRoute,
  postEndpointsAgentsConnectorsCheckInIndexRoute,
  postEndpointsAgentsConnectorsConnectorUuidMdmConfigIndexRoute,
  postEndpointsAgentsConnectorsEnrollIndexRoute,
  postEndpointsAgentsConnectorsIndexRoute,
  postEndpointsAgentsEnrollmentTokensIndexRoute,
  postEndpointsAgentsPssoIseIndexRoute,
  postEndpointsAgentsPssoRegisterDeviceIndexRoute,
  postEndpointsAgentsPssoRegisterUserIndexRoute,
  postEndpointsDeviceAccessGroupsIndexRoute,
  postEndpointsDeviceBindingsIndexRoute,
  postEndpointsDevicesIndexRoute,
  postEndpointsFleetConnectorsIndexRoute,
  postEndpointsGoogleChromeConnectorsIndexRoute,
  postEndpointsMicrosoftIntuneConnectorsIndexRoute,
  putEndpointsAgentsConnectorsConnectorUuidIndexRoute,
  putEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute,
  putEndpointsAgentsPssoIseUuidIndexRoute,
  putEndpointsDeviceAccessGroupsPbmUuidIndexRoute,
  putEndpointsDeviceBindingsPolicyBindingUuidIndexRoute,
  putEndpointsDevicesDeviceUuidIndexRoute,
  putEndpointsFleetConnectorsConnectorUuidIndexRoute,
  putEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute,
  putEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const endpointsHandler = app
  .openapi(getEndpointsAgentsConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsAgentsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsAgentsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsAgentsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsConnectorUuidMdmConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsConnectorsConnectorUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsConnectorsAgentConfigIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsAuthFedIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsAuthIaIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsCheckInIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsConnectorsEnrollIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsEnrollmentTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsEnrollmentTokensIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsAgentsEnrollmentTokensTokenUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsEnrollmentTokensTokenUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsEnrollmentTokensTokenUuidViewKeyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsPssoIseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsPssoIseIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsPssoIseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsAgentsPssoIseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsAgentsPssoIseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsAgentsPssoIseUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsPssoIseUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsAgentsPssoRegisterDeviceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsPssoRegisterDeviceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsAgentsPssoRegisterDeviceIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsAgentsPssoRegisterUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsConnectorsConnectorUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsConnectorsTypesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceAccessGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsDeviceAccessGroupsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceAccessGroupsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsDeviceAccessGroupsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsDeviceAccessGroupsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsDeviceAccessGroupsPbmUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceAccessGroupsPbmUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsDeviceBindingsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsDeviceBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsDeviceBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsDeviceBindingsPolicyBindingUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDeviceBindingsPolicyBindingUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsDevicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDevicesDeviceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsDevicesDeviceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsDevicesDeviceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsDevicesDeviceUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDevicesDeviceUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsDevicesSummaryIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsFleetConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsFleetConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsFleetConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsFleetConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsFleetConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsFleetConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsFleetConnectorsConnectorUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsGoogleChromeConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsGoogleChromeConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsGoogleChromeConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsGoogleChromeConnectorsConnectorUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsMicrosoftIntuneConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postEndpointsMicrosoftIntuneConnectorsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteEndpointsMicrosoftIntuneConnectorsConnectorUuidIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEndpointsMicrosoftIntuneConnectorsConnectorUuidUsedByIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
