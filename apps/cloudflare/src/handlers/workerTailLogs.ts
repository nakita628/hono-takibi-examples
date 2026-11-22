import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAccountsAccountIdWorkersScriptsScriptNameTailsIdRoute,
  getAccountsAccountIdWorkersScriptsScriptNameTailsRoute,
  postAccountsAccountIdWorkersScriptsScriptNameTailsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerTailLogsHandler = app
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameTailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersScriptsScriptNameTailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAccountsAccountIdWorkersScriptsScriptNameTailsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
