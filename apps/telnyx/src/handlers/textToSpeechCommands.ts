import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTextToSpeechSpeechRoute,
  getTextToSpeechVoicesRoute,
  postTextToSpeechSpeechRoute,
} from '../routes'

const app = new OpenAPIHono()

export const textToSpeechCommandsHandler = app
  .openapi(getTextToSpeechSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTextToSpeechSpeechRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTextToSpeechVoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
