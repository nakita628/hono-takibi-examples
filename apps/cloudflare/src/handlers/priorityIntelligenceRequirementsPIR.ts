import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute,
  getAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute,
  getAccountsAccountIdCloudforceOneRequestsPriorityQuotaRoute,
  postAccountsAccountIdCloudforceOneRequestsPriorityNewRoute,
  postAccountsAccountIdCloudforceOneRequestsPriorityRoute,
  putAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const priorityIntelligenceRequirementsPIRHandler = app
  .openapi(postAccountsAccountIdCloudforceOneRequestsPriorityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdCloudforceOneRequestsPriorityNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsPriorityQuotaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdCloudforceOneRequestsPriorityPriorityIdRoute, (c) => {
    throw new Error('Not implemented')
  })
