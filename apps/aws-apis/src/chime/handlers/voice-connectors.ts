import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  deleteVoiceConnectorsVoiceConnectorIdOriginationRoute,
  deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  deleteVoiceConnectorsVoiceConnectorIdRoute,
  deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  deleteVoiceConnectorsVoiceConnectorIdTerminationRoute,
  getVoiceConnectorsRoute,
  getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdOriginationRoute,
  getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  getVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
  getVoiceConnectorsVoiceConnectorIdRoute,
  getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationHealthRoute,
  getVoiceConnectorsVoiceConnectorIdTerminationRoute,
  postVoiceConnectorsRoute,
  postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRoute,
  postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRoute,
  postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute,
  postVoiceConnectorsVoiceConnectorIdProxySessionsRoute,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRoute,
  postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRoute,
  putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdOriginationRoute,
  putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute,
  putVoiceConnectorsVoiceConnectorIdRoute,
  putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute,
  putVoiceConnectorsVoiceConnectorIdTerminationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const voiceConnectorsHandler = app
  .openapi(postVoiceConnectorsVoiceConnectorIdOperationAssociatePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsVoiceConnectorIdProxySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdProxySessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsVoiceConnectorIdProxySessionsProxySessionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdEmergencyCallingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdOriginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdOriginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdOriginationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdProgrammableNumbersProxyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdStreamingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVoiceConnectorsVoiceConnectorIdTerminationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdTerminationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdTerminationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsVoiceConnectorIdOperationDisassociatePhoneNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putVoiceConnectorsVoiceConnectorIdLoggingConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdTerminationHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVoiceConnectorsVoiceConnectorIdTerminationCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVoiceConnectorsVoiceConnectorIdTerminationCredentialsOperationPutRoute, (c) => {
    throw new Error('Not implemented')
  })
