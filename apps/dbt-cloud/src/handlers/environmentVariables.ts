import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
  deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRoute,
  getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute,
  postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRoute,
  putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const environmentVariablesHandler = app
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesBulkIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesEnvironmentIndexRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesJobIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV3AccountsAccountIdProjectsProjectIdEnvironmentVariablesUserIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
