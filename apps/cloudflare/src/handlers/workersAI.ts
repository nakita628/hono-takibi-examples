import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdAiAuthorsSearchRoute,
  getAccountsAccountIdAiModelsSchemaRoute,
  getAccountsAccountIdAiModelsSearchRoute,
  getAccountsAccountIdAiTasksSearchRoute,
  getAccountsAccountIdAiTomarkdownSupportedRoute,
  postAccountsAccountIdAiRunModelNameRoute,
  postAccountsAccountIdAiRunRoute,
  postAccountsAccountIdAiTomarkdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workersAIHandler = app
  .openapi(getAccountsAccountIdAiAuthorsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiModelsSchemaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiModelsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiRunModelNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiTasksSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAiTomarkdownRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdAiTomarkdownSupportedRoute, (c) => {
    throw new Error('Not implemented')
  })
