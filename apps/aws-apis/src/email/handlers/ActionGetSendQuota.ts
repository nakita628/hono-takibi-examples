import { OpenAPIHono } from '@hono/zod-openapi'
import { getActionGetSendQuotaRoute, postActionGetSendQuotaRoute } from '../routes'

const app = new OpenAPIHono()

export const ActionGetSendQuotaHandler = app
  .openapi(getActionGetSendQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetSendQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
