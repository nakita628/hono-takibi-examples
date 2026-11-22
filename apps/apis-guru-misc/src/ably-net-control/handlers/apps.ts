import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsIdRoute,
  getAccountsAccountIdAppsRoute,
  patchAppsIdRoute,
  postAccountsAccountIdAppsRoute,
  postAppsIdPkcs12Route,
} from '../routes'

const app = new OpenAPIHono()

export const appsHandler = app
  .openapi(getAccountsAccountIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAccountsAccountIdAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsIdPkcs12Route, (c) => {
    throw new Error('Not implemented')
  })
