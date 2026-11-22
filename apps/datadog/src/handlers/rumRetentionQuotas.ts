import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute,
  getApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute,
  putApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const rumRetentionQuotasHandler = app
  .openapi(deleteApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV2RumConfigRetentionQuotaScopeTypeScopeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
