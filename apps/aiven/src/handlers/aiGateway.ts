import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectAiGatewayKeysKeyIdRoute,
  getOrganizationOrganizationIdAiGatewayBudgetsRoute,
  getOrganizationOrganizationIdAiGatewayKeysRoute,
  getProjectProjectAiGatewayBudgetRoute,
  getProjectProjectAiGatewayKeyOwnersRoute,
  getProjectProjectAiGatewayKeysKeyIdRoute,
  getProjectProjectAiGatewayKeysRoute,
  getProjectProjectAiGatewayModelsRoute,
  getProjectProjectAiGatewayUsageRoute,
  patchOrganizationOrganizationIdAiGatewayKeysBudgetsRoute,
  patchProjectProjectAiGatewayKeysKeyIdRoute,
  postProjectProjectAiGatewayKeysRoute,
  putOrganizationOrganizationIdAiGatewayBudgetRoute,
  putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRoute,
  putProjectProjectAiGatewayBudgetRoute,
} from '../routes'

const app = new OpenAPIHono()

export const aiGatewayHandler = app
  .openapi(postProjectProjectAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProjectAiGatewayKeysKeyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayKeyOwnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAiGatewayBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdAiGatewayKeysBudgetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdAiGatewayKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationOrganizationIdAiGatewayOwnerOwnerUserIdBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProjectProjectAiGatewayBudgetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectAiGatewayUsageRoute, (c) => {
    throw new Error('Not implemented')
  })
