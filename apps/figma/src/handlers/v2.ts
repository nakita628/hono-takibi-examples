import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV2WebhooksWebhookIdRoute,
  getV2FoldersFolderIdFilesRoute,
  getV2FoldersFolderIdFoldersRoute,
  getV2FoldersFolderIdMetaRoute,
  getV2TeamsTeamIdFoldersRoute,
  getV2TeamsTeamIdWebhooksRoute,
  getV2WebhooksRoute,
  getV2WebhooksWebhookIdRequestsRoute,
  getV2WebhooksWebhookIdRoute,
  postV2WebhooksRoute,
  putV2WebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v2Handler = app
  .openapi(getV2TeamsTeamIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdFoldersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdFilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2FoldersFolderIdMetaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2WebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV2WebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2TeamsTeamIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2WebhooksWebhookIdRequestsRoute, (c) => {
    throw new Error('Not implemented')
  })
