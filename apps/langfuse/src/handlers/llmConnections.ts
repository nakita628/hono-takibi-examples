import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiPublicLlmConnectionsIdRoute,
  deleteApiPublicOrganizationsLlmConnectionsIdRoute,
  getApiPublicLlmConnectionsRoute,
  getApiPublicOrganizationsLlmConnectionsRoute,
  putApiPublicLlmConnectionsRoute,
  putApiPublicOrganizationsLlmConnectionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const llmConnectionsHandler = app
  .openapi(getApiPublicLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicLlmConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiPublicOrganizationsLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiPublicOrganizationsLlmConnectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiPublicOrganizationsLlmConnectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
