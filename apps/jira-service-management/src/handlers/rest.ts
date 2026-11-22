import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getRestServicedeskapiKnowledgebaseArticleViewPageIdRoute,
  postRestServicedeskapiCustomerSkipPermissionCheckRoute,
  postRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckRoute,
} from '../routes'

const app = new OpenAPIHono()

export const restHandler = app
  .openapi(postRestServicedeskapiCustomerSkipPermissionCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiKnowledgebaseArticleViewPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiServicedeskServiceDeskIdCustomerSkipPermissionCheckRoute, (c) => {
    throw new Error('Not implemented')
  })
