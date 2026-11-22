import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSms77IdRoute,
  getApiTransportSms77IdRoute,
  getApiTransportSms77Route,
  postApiTransportSms77Route,
  putApiTransportSms77IdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSms77Handler = app
  .openapi(getApiTransportSms77Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSms77Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSms77IdRoute, (c) => {
    throw new Error('Not implemented')
  })
