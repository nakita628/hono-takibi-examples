import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiBoardGameGameIdChatRoute,
  getApiBoardGameStreamGameIdRoute,
  getApiStreamEventRoute,
  postApiBoardGameGameIdAbortRoute,
  postApiBoardGameGameIdBerserkRoute,
  postApiBoardGameGameIdChatRoute,
  postApiBoardGameGameIdClaimDrawRoute,
  postApiBoardGameGameIdClaimVictoryRoute,
  postApiBoardGameGameIdDrawAcceptRoute,
  postApiBoardGameGameIdMoveMoveRoute,
  postApiBoardGameGameIdResignRoute,
  postApiBoardGameGameIdTakebackAcceptRoute,
  postApiBoardSeekRoute,
} from '../routes'

const app = new OpenAPIHono()

export const boardHandler = app
  .openapi(getApiStreamEventRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardSeekRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBoardGameStreamGameIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdMoveMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiBoardGameGameIdChatRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdAbortRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdResignRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdDrawAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdTakebackAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdClaimVictoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdClaimDrawRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiBoardGameGameIdBerserkRoute, (c) => {
    throw new Error('Not implemented')
  })
