import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOcsV2PhpAppsAppApiApiV1TalkBotRoute,
  postOcsV2PhpAppsAppApiApiV1TalkBotRoute,
  postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteRoute,
} from '../routes'

const app = new OpenAPIHono()

export const talkBotHandler = app
  .openapi(postOcsV2PhpAppsAppApiApiV1TalkBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOcsV2PhpAppsAppApiApiV1TalkBotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOcsV2PhpAppsAppApiApiV1TalkProxyAppIdRouteRoute, (c) => {
    throw new Error('Not implemented')
  })
