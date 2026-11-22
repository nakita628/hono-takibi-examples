import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportTrelloIdRoute,
  getApiTransportTrelloIdRoute,
  getApiTransportTrelloRoute,
  postApiTransportTrelloRoute,
  putApiTransportTrelloIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportTrelloHandler = app
  .openapi(getApiTransportTrelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportTrelloRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportTrelloIdRoute, (c) => {
    throw new Error('Not implemented')
  })
