import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
  get20100401AccountsAccountSidOutgoingCallerIdsJsonRoute,
  get20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
  post20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401OutgoingCallerIdHandler = app
  .openapi(get20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidOutgoingCallerIdsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidOutgoingCallerIdsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
