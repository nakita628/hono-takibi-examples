import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getBotSessionsRoute,
  postBotChallengeRoute,
  postBotSignupResendMagicLinkRoute,
  postBotSignupRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botSignupHandler = app
  .openapi(postBotChallengeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getBotSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotSignupRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postBotSignupResendMagicLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
