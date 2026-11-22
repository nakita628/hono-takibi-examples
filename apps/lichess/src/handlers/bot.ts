import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBotGameGameIdChatRoute,
  getApiBotGameStreamGameIdRoute,
  getApiBotOnlineRoute,
  postApiBotAccountUpgradeRoute,
  postApiBotGameGameIdAbortRoute,
  postApiBotGameGameIdChatRoute,
  postApiBotGameGameIdClaimDrawRoute,
  postApiBotGameGameIdClaimVictoryRoute,
  postApiBotGameGameIdDrawAcceptRoute,
  postApiBotGameGameIdMoveMoveRoute,
  postApiBotGameGameIdResignRoute,
  postApiBotGameGameIdTakebackAcceptRoute,
} from '../routes'

const app = new OpenAPIHono()

export const botHandler = app
  .openapi(getApiBotOnlineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotAccountUpgradeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBotGameStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdMoveMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBotGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdResignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdDrawAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdTakebackAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdClaimVictoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBotGameGameIdClaimDrawRoute, (c) => {
    throw new Error('Not implemented')
  })
