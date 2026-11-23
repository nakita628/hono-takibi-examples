import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AccountsAccountIdCampaignsCampaignIdRoute,
  deleteV1AccountsAccountIdContactsContactIdRoute,
  deleteV1AccountsAccountIdTemplatesTemplateIdRoute,
  deleteV1AccountsAccountIdWebhooksUrlRoute,
  getV1AccountsAccountIdCampaignsCampaignIdRoute,
  getV1AccountsAccountIdCampaignsRoute,
  getV1AccountsAccountIdContactsContactIdRoute,
  getV1AccountsAccountIdContactsRoute,
  getV1AccountsAccountIdConversationsConversationIdRoute,
  getV1AccountsAccountIdConversationsRoute,
  getV1AccountsAccountIdMessagesMessageIdRoute,
  getV1AccountsAccountIdMessagesRoute,
  getV1AccountsAccountIdTemplatesRoute,
  getV1AccountsAccountIdTemplatesTemplateIdRoute,
  getV1AccountsAccountIdWebhooksRoute,
  postV1AccountsAccountIdCampaignsRoute,
  postV1AccountsAccountIdContactsRoute,
  postV1AccountsAccountIdMessagesRoute,
  postV1AccountsAccountIdTemplatesRoute,
  postV1AccountsAccountIdWebhooksRoute,
  postV1ToolsSharefileRoute,
  putV1AccountsAccountIdCampaignsCampaignIdRoute,
  putV1AccountsAccountIdContactsContactIdRoute,
  putV1AccountsAccountIdConversationsConversationIdCloseRoute,
  putV1AccountsAccountIdTemplatesTemplateIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdCampaignsCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdContactsContactIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdConversationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdConversationsConversationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdConversationsConversationIdCloseRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdMessagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdMessagesMessageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdTemplatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AccountsAccountIdTemplatesTemplateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1AccountsAccountIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AccountsAccountIdWebhooksUrlRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ToolsSharefileRoute, (c) => {
    throw new Error('Not implemented')
  })
