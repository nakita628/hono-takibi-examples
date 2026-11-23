import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAiGatewayBudgetsDefaultsRoute,
  deleteAiGatewayBudgetsRoute,
  deleteAiGatewayByokCredentialsCredentialIdRoute,
  deleteAiGatewayRulesRoute,
  deleteAiGatewayVirtualModelConfigsRoute,
  deleteAiGatewayVirtualModelConfigsVmcSlugRoute,
  getAiGatewayBudgetsDefaultsListRoute,
  getAiGatewayBudgetsListRoute,
  getAiGatewayByokCredentialsCredentialIdRoute,
  getAiGatewayByokCredentialsListRoute,
  getAiGatewayRulesRoute,
  getAiGatewayVirtualModelConfigsListRoute,
  getAiGatewayVirtualModelConfigsRoute,
  getAiGatewayVirtualModelConfigsVmcSlugRoute,
  patchAiGatewayByokCredentialsCredentialIdRoute,
  patchAiGatewayRulesRoute,
  patchAiGatewayVirtualModelConfigsRoute,
  patchAiGatewayVirtualModelConfigsVmcSlugRoute,
  postAiGatewayByokCredentialsRoute,
  postAiGatewayRulesRoute,
  postAiGatewayVirtualModelConfigsRoute,
  putAiGatewayBudgetsDefaultsRoute,
  putAiGatewayBudgetsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(postAiGatewayByokCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayByokCredentialsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayByokCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiGatewayByokCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayByokCredentialsCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiGatewayVirtualModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayVirtualModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiGatewayVirtualModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayVirtualModelConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayVirtualModelConfigsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayVirtualModelConfigsVmcSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiGatewayVirtualModelConfigsVmcSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayVirtualModelConfigsVmcSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAiGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAiGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayBudgetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiGatewayBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAiGatewayBudgetsDefaultsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAiGatewayBudgetsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAiGatewayBudgetsDefaultsRoute, (c) => {
    throw new Error('Not implemented')
  })
