import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute,
  getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute,
  postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute,
  putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const threadHandler = app
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsRecentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatSubscribedThreadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsThreadIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsSpreedApiApiVersionChatTokenThreadsMessageIdNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
