import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersScriptsScriptNameSchedulesRoute,
  putAccountsAccountIdWorkersScriptsScriptNameSchedulesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const workerCronTriggerHandler = app
  .openapi(getAccountsAccountIdWorkersScriptsScriptNameSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAccountsAccountIdWorkersScriptsScriptNameSchedulesRoute, (c) => {
    throw new Error('Not implemented')
  })
