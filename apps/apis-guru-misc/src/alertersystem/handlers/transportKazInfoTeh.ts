import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteApiTransportKazInfoTehIdRoute,
  getApiTransportKazInfoTehIdRoute,
  getApiTransportKazInfoTehRoute,
  postApiTransportKazInfoTehRoute,
  putApiTransportKazInfoTehIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transportKazInfoTehHandler = app
  .openapi(getApiTransportKazInfoTehRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTransportKazInfoTehRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putApiTransportKazInfoTehIdRoute, (c) => {
    throw new Error('Not implemented')
  })
