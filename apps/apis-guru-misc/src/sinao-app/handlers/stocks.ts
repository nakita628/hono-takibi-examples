import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAppsAppIdProductstocksIdRoute,
  getAppsAppIdProductstocksIdRoute,
  getAppsAppIdProductstocksRoute,
  postAppsAppIdProductstocksIdDestructRoute,
  postAppsAppIdProductstocksIdRentalBackRoute,
  postAppsAppIdProductstocksIdRentalExitRoute,
  postAppsAppIdProductstocksIdRoute,
  postAppsAppIdProductstocksRoute,
} from '../routes'

const app = new OpenAPIHono()

export const stocksHandler = app
  .openapi(getAppsAppIdProductstocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdDestructRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRentalBackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAppsAppIdProductstocksIdRentalExitRoute, (c) => {
    throw new Error('Not implemented')
  })
