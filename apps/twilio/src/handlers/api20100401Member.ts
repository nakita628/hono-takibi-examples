import { OpenAPIHono } from '@hono/zod-openapi'
import {
  get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute,
  get20100401AccountsAccountSidQueuesQueueSidMembersJsonRoute,
  post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401MemberHandler = app
  .openapi(get20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidQueuesQueueSidMembersCallSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidQueuesQueueSidMembersJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
