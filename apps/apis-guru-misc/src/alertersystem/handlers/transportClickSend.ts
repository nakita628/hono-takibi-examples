import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportClickSendIdRoute,
  getApiTransportClickSendIdRoute,
  getApiTransportClickSendRoute,
  postApiTransportClickSendRoute,
  putApiTransportClickSendIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportClickSendHandler = app
  .openapi(getApiTransportClickSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportClickSendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportClickSendIdRoute, (c) => {
    throw new Error('Not implemented')
  })
