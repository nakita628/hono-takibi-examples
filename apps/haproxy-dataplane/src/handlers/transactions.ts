import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxyTransactionsIdRoute,
  getServicesHaproxyTransactionsIdRoute,
  getServicesHaproxyTransactionsRoute,
  postServicesHaproxyTransactionsRoute,
  putServicesHaproxyTransactionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transactionsHandler = app
  .openapi(getServicesHaproxyTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxyTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxyTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxyTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxyTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
