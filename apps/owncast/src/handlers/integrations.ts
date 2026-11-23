import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getIntegrationsChatRoute,
  getIntegrationsClientsRoute,
  getIntegrationsModerationChatUserUserIdRoute,
  getIntegrationsStatusRoute,
  optionsIntegrationsChatActionRoute,
  optionsIntegrationsChatMessagevisibilityRoute,
  optionsIntegrationsChatRoute,
  optionsIntegrationsChatSendRoute,
  optionsIntegrationsChatSystemClientClientIdRoute,
  optionsIntegrationsChatSystemRoute,
  optionsIntegrationsChatUserRoute,
  optionsIntegrationsClientsRoute,
  optionsIntegrationsStreamtitleRoute,
  postIntegrationsChatActionRoute,
  postIntegrationsChatMessagevisibilityRoute,
  postIntegrationsChatSendRoute,
  postIntegrationsChatSystemClientClientIdRoute,
  postIntegrationsChatSystemRoute,
  postIntegrationsChatUserRoute,
  postIntegrationsStreamtitleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(postIntegrationsChatSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSystemRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatSystemClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSystemClientClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatUserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatActionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntegrationsStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsStreamtitleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsIntegrationsClientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getIntegrationsModerationChatUserUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
