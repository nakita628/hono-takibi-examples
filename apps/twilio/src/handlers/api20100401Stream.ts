import { OpenAPIHono } from '@hono/zod-openapi'
import {
  post20100401AccountsAccountSidCallsCallSidStreamsJsonRoute,
  post20100401AccountsAccountSidCallsCallSidStreamsSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401StreamHandler = app
  .openapi(post20100401AccountsAccountSidCallsCallSidStreamsJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidCallsCallSidStreamsSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
