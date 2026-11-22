import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesEnvironmentVariableKeyRoute,
  getAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesRoute,
  patchAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentVariablesHandler = app
  .openapi(getAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteAccountsAccountIdBuildsTriggersTriggerUuidEnvironmentVariablesEnvironmentVariableKeyRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
