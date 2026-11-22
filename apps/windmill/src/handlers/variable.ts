import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteWWorkspaceVariablesDeleteBulkRoute,
  deleteWWorkspaceVariablesDeletePathRoute,
  getWWorkspaceVariablesExistsPathRoute,
  getWWorkspaceVariablesExternalSecretPrefixesRoute,
  getWWorkspaceVariablesGetPathRoute,
  getWWorkspaceVariablesGetValuePathRoute,
  getWWorkspaceVariablesListContextualRoute,
  getWWorkspaceVariablesListRoute,
  postWWorkspaceVariablesCreateRoute,
  postWWorkspaceVariablesEncryptRoute,
  postWWorkspaceVariablesUpdatePathRoute,
} from '../routes'

const app = new OpenAPIHono()

export const variableHandler = app
  .openapi(postWWorkspaceVariablesCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVariablesEncryptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesExternalSecretPrefixesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVariablesDeletePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteWWorkspaceVariablesDeleteBulkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postWWorkspaceVariablesUpdatePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesGetPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesGetValuePathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesExistsPathRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWWorkspaceVariablesListContextualRoute, (c) => {
    throw new Error('Not implemented')
  })
