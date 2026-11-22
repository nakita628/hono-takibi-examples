import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidApplicationsSidJsonRoute,
  get20100401AccountsAccountSidApplicationsJsonRoute,
  get20100401AccountsAccountSidApplicationsSidJsonRoute,
  post20100401AccountsAccountSidApplicationsJsonRoute,
  post20100401AccountsAccountSidApplicationsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401ApplicationHandler = app
  .openapi(post20100401AccountsAccountSidApplicationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidApplicationsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidApplicationsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidApplicationsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidApplicationsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
