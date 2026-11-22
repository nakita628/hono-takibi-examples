import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteVlmMonitorRoute,
  getChatToolsRoute,
  getVlmMonitorRoute,
  postChatCompletionRoute,
  postChatExecuteRoute,
  postVlmMonitorRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(getChatToolsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatExecuteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatCompletionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteVlmMonitorRoute, (c) => {
    throw new Error('Not implemented')
  })
