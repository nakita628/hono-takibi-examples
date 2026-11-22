import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProvidersMsTeamsChannelIdAuthCheckRoute,
  getV1ProvidersMsTeamsChannelIdChannelsRoute,
  getV1ProvidersMsTeamsChannelIdTeamsRoute,
  getV1ProvidersSlackChannelIdAuthCheckRoute,
  getV1ProvidersSlackChannelIdChannelsRoute,
  putV1ProvidersMsTeamsChannelIdRevokeAccessRoute,
  putV1ProvidersSlackChannelIdRevokeAccessRoute,
} from '../routes'

const app = new OpenAPIHono()

export const providersHandler = app
  .openapi(getV1ProvidersMsTeamsChannelIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvidersSlackChannelIdRevokeAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersMsTeamsChannelIdAuthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProvidersMsTeamsChannelIdRevokeAccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersMsTeamsChannelIdTeamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersSlackChannelIdAuthCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProvidersSlackChannelIdChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
