import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getChatRoute,
  optionsChatRegisterRoute,
  postChatMessagevisibilityRoute,
  postChatRegisterRoute,
  postChatUsersSetenabledRoute,
} from '../routes'

const app = new OpenAPIHono()

export const chatHandler = app
  .openapi(getChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(optionsChatRegisterRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatMessagevisibilityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postChatUsersSetenabledRoute, (c) => {
    throw new Error('Not implemented')
  })
