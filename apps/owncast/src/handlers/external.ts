import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsChatRoute,
  getIntegrationsClientsRoute,
  getIntegrationsModerationChatUserUserIdRoute,
  getIntegrationsStatusRoute,
  postIntegrationsChatActionRoute,
  postIntegrationsChatMessagevisibilityRoute,
  postIntegrationsChatSendRoute,
  postIntegrationsChatSystemClientClientIdRoute,
  postIntegrationsChatSystemRoute,
  postIntegrationsChatUserRoute,
  postIntegrationsStreamtitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const externalHandler = app
  .openapi(postIntegrationsChatSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatSystemClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsModerationChatUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
