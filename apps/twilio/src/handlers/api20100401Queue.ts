import { OpenAPIHono } from '@hono/zod-openapi'
import {
  delete20100401AccountsAccountSidQueuesSidJsonRoute,
  get20100401AccountsAccountSidQueuesJsonRoute,
  get20100401AccountsAccountSidQueuesSidJsonRoute,
  post20100401AccountsAccountSidQueuesJsonRoute,
  post20100401AccountsAccountSidQueuesSidJsonRoute,
} from '../routes'

const app = new OpenAPIHono()

export const api20100401QueueHandler = app
  .openapi(get20100401AccountsAccountSidQueuesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidQueuesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(delete20100401AccountsAccountSidQueuesSidJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(get20100401AccountsAccountSidQueuesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(post20100401AccountsAccountSidQueuesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
