import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteLlmTokenGatewayTokenGroupsIdRoute,
  deleteLlmTokenGatewayTokenKeysIdRoute,
  getLlmTokenGatewaySpendEventsRoute,
  getLlmTokenGatewaySpendSummaryRoute,
  getLlmTokenGatewayTokenGroupsIdRoute,
  getLlmTokenGatewayTokenGroupsRoute,
  getLlmTokenGatewayTokenKeysIdRoute,
  getLlmTokenGatewayTokenKeysRoute,
  getLlmTokenGatewayUsageExportRoute,
  getLlmTokenGatewayUsageSummaryRoute,
  patchLlmTokenGatewayTokenGroupsIdRoute,
  patchLlmTokenGatewayTokenKeysIdRoute,
  postLlmTokenGatewayTokenGroupsRoute,
  postLlmTokenGatewayTokenKeysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(getLlmTokenGatewaySpendEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewaySpendSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayTokenGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLlmTokenGatewayTokenGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLlmTokenGatewayTokenGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayTokenGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLlmTokenGatewayTokenGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayTokenKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postLlmTokenGatewayTokenKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLlmTokenGatewayTokenKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayTokenKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchLlmTokenGatewayTokenKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayUsageExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getLlmTokenGatewayUsageSummaryRoute, (c) => {
    throw new Error('Not implemented')
  })
