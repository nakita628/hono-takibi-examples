import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportSendinblueIdRoute,
  getApiTransportSendinblueIdRoute,
  getApiTransportSendinblueRoute,
  postApiTransportSendinblueRoute,
  putApiTransportSendinblueIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportSendinblueHandler = app
  .openapi(getApiTransportSendinblueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportSendinblueRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportSendinblueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
