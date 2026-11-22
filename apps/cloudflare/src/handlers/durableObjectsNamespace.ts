import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAccountsAccountIdWorkersDurableObjectsNamespacesIdExportRoute,
  getAccountsAccountIdWorkersDurableObjectsNamespacesIdObjectsRoute,
  getAccountsAccountIdWorkersDurableObjectsNamespacesRoute,
  postAccountsAccountIdWorkersDurableObjectsNamespacesIdQueryV2Route,
} from '../routes'

const app = new OpenAPIHono()

export const durableObjectsNamespaceHandler = app
  .openapi(getAccountsAccountIdWorkersDurableObjectsNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersDurableObjectsNamespacesIdExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAccountsAccountIdWorkersDurableObjectsNamespacesIdObjectsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdWorkersDurableObjectsNamespacesIdQueryV2Route, (c) => {
    throw new Error('Not implemented')
  })
