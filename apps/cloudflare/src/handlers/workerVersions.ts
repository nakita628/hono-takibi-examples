import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersScriptsScriptNameVersionsRoute,
  getAccountsAccountIdWorkersScriptsScriptNameVersionsVersionIdRoute,
  postAccountsAccountIdWorkersScriptsScriptNameVersionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerVersionsHandler = app
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersScriptsScriptNameVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameVersionsVersionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
