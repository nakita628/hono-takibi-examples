import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2BotMessageMessageIdContentPreviewRoute,
  getV2BotMessageMessageIdContentRoute,
  getV2BotMessageMessageIdContentTranscodingRoute,
  getV2BotRichmenuRichMenuIdContentRoute,
  postV2BotRichmenuRichMenuIdContentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const messagingApiBlobHandler = app
  .openapi(getV2BotMessageMessageIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageMessageIdContentPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotMessageMessageIdContentTranscodingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2BotRichmenuRichMenuIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2BotRichmenuRichMenuIdContentRoute, (c) => {
    throw new Error('Not implemented')
  })
