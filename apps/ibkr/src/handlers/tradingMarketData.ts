import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ApiIserverMarketdataHistoryRoute,
  getV1ApiIserverMarketdataSnapshotRoute,
  getV1ApiIserverMarketdataUnsubscribeallRoute,
  postV1ApiIserverMarketdataUnsubscribeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const tradingMarketDataHandler = app
  .openapi(postV1ApiIserverMarketdataUnsubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataSnapshotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ApiIserverMarketdataUnsubscribeallRoute, (c) => {
    throw new Error('Not implemented')
  })
