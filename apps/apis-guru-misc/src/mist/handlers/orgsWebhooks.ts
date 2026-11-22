import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV1OrgsOrgIdWebhooksWebhookIdRoute,
  getApiV1OrgsOrgIdWebhooksRoute,
  getApiV1OrgsOrgIdWebhooksWebhookIdRoute,
  postApiV1OrgsOrgIdWebhooksRoute,
  putApiV1OrgsOrgIdWebhooksWebhookIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orgsWebhooksHandler = app
  .openapi(getApiV1OrgsOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV1OrgsOrgIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV1OrgsOrgIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
