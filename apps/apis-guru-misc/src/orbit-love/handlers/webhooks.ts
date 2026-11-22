import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWorkspaceSlugWebhooksIdRoute,
  getWorkspaceSlugWebhooksIdRoute,
  getWorkspaceSlugWebhooksRoute,
  postWorkspaceSlugWebhooksRoute,
  putWorkspaceSlugWebhooksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const webhooksHandler = app
  .openapi(getWorkspaceSlugWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWorkspaceSlugWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putWorkspaceSlugWebhooksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
