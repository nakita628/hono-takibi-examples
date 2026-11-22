import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
  getV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
  getV21AccountsAccountIdTabDefinitionsRoute,
  postV21AccountsAccountIdTabDefinitionsRoute,
  putV21AccountsAccountIdTabDefinitionsCustomTabIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customTabsHandler = app
  .openapi(getV21AccountsAccountIdTabDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdTabDefinitionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdTabDefinitionsCustomTabIdRoute, (c) => {
    throw new Error('Not implemented')
  })
