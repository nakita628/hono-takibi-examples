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
  postOauth2TokenRoute,
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
} from './routes'
import {
  deleteV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  deleteV1AccountsAccountIdContactsContactIdRouteHandler,
  deleteV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
  deleteV1AccountsAccountIdWebhooksUrlRouteHandler,
  getV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  getV1AccountsAccountIdCampaignsRouteHandler,
  getV1AccountsAccountIdContactsContactIdRouteHandler,
  getV1AccountsAccountIdContactsRouteHandler,
  getV1AccountsAccountIdConversationsConversationIdRouteHandler,
  getV1AccountsAccountIdConversationsRouteHandler,
  getV1AccountsAccountIdMessagesMessageIdRouteHandler,
  getV1AccountsAccountIdMessagesRouteHandler,
  getV1AccountsAccountIdTemplatesRouteHandler,
  getV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
  getV1AccountsAccountIdWebhooksRouteHandler,
  postOauth2TokenRouteHandler,
  postV1AccountsAccountIdCampaignsRouteHandler,
  postV1AccountsAccountIdContactsRouteHandler,
  postV1AccountsAccountIdMessagesRouteHandler,
  postV1AccountsAccountIdTemplatesRouteHandler,
  postV1AccountsAccountIdWebhooksRouteHandler,
  postV1ToolsSharefileRouteHandler,
  putV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  putV1AccountsAccountIdContactsContactIdRouteHandler,
  putV1AccountsAccountIdConversationsConversationIdCloseRouteHandler,
  putV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postOauth2TokenRoute, postOauth2TokenRouteHandler)
  .openapi(getV1AccountsAccountIdCampaignsRoute, getV1AccountsAccountIdCampaignsRouteHandler)
  .openapi(postV1AccountsAccountIdCampaignsRoute, postV1AccountsAccountIdCampaignsRouteHandler)
  .openapi(
    deleteV1AccountsAccountIdCampaignsCampaignIdRoute,
    deleteV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdCampaignsCampaignIdRoute,
    getV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(
    putV1AccountsAccountIdCampaignsCampaignIdRoute,
    putV1AccountsAccountIdCampaignsCampaignIdRouteHandler,
  )
  .openapi(getV1AccountsAccountIdContactsRoute, getV1AccountsAccountIdContactsRouteHandler)
  .openapi(postV1AccountsAccountIdContactsRoute, postV1AccountsAccountIdContactsRouteHandler)
  .openapi(
    deleteV1AccountsAccountIdContactsContactIdRoute,
    deleteV1AccountsAccountIdContactsContactIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdContactsContactIdRoute,
    getV1AccountsAccountIdContactsContactIdRouteHandler,
  )
  .openapi(
    putV1AccountsAccountIdContactsContactIdRoute,
    putV1AccountsAccountIdContactsContactIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdConversationsRoute,
    getV1AccountsAccountIdConversationsRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdConversationsConversationIdRoute,
    getV1AccountsAccountIdConversationsConversationIdRouteHandler,
  )
  .openapi(
    putV1AccountsAccountIdConversationsConversationIdCloseRoute,
    putV1AccountsAccountIdConversationsConversationIdCloseRouteHandler,
  )
  .openapi(getV1AccountsAccountIdMessagesRoute, getV1AccountsAccountIdMessagesRouteHandler)
  .openapi(postV1AccountsAccountIdMessagesRoute, postV1AccountsAccountIdMessagesRouteHandler)
  .openapi(
    getV1AccountsAccountIdMessagesMessageIdRoute,
    getV1AccountsAccountIdMessagesMessageIdRouteHandler,
  )
  .openapi(getV1AccountsAccountIdTemplatesRoute, getV1AccountsAccountIdTemplatesRouteHandler)
  .openapi(postV1AccountsAccountIdTemplatesRoute, postV1AccountsAccountIdTemplatesRouteHandler)
  .openapi(
    deleteV1AccountsAccountIdTemplatesTemplateIdRoute,
    deleteV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
  )
  .openapi(
    getV1AccountsAccountIdTemplatesTemplateIdRoute,
    getV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
  )
  .openapi(
    putV1AccountsAccountIdTemplatesTemplateIdRoute,
    putV1AccountsAccountIdTemplatesTemplateIdRouteHandler,
  )
  .openapi(getV1AccountsAccountIdWebhooksRoute, getV1AccountsAccountIdWebhooksRouteHandler)
  .openapi(postV1AccountsAccountIdWebhooksRoute, postV1AccountsAccountIdWebhooksRouteHandler)
  .openapi(
    deleteV1AccountsAccountIdWebhooksUrlRoute,
    deleteV1AccountsAccountIdWebhooksUrlRouteHandler,
  )
  .openapi(postV1ToolsSharefileRoute, postV1ToolsSharefileRouteHandler)

export default app
