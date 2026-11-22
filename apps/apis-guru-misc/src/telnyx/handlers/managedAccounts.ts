import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getManagedAccountsIdRoute,
  getManagedAccountsRoute,
  postManagedAccountsIdActionsDisableRoute,
  postManagedAccountsIdActionsEnableRoute,
  postManagedAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const managedAccountsHandler = app
  .openapi(getManagedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getManagedAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsIdActionsDisableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postManagedAccountsIdActionsEnableRoute, (c) => {
    throw new Error('Not implemented')
  })
