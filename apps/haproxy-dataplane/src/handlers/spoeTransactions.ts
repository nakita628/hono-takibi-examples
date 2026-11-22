import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute,
  getServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute,
  getServicesHaproxySpoeSpoeFilesParentNameTransactionsRoute,
  postServicesHaproxySpoeSpoeFilesParentNameTransactionsRoute,
  putServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const spoeTransactionsHandler = app
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postServicesHaproxySpoeSpoeFilesParentNameTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putServicesHaproxySpoeSpoeFilesParentNameTransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
