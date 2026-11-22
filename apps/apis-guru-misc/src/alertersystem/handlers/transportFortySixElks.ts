import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportFortySixElksIdRoute,
  getApiTransportFortySixElksIdRoute,
  getApiTransportFortySixElksRoute,
  postApiTransportFortySixElksRoute,
  putApiTransportFortySixElksIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportFortySixElksHandler = app
  .openapi(getApiTransportFortySixElksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportFortySixElksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportFortySixElksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
