import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdBuyOrdersRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRoute,
  getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRoute,
  getV1WorkgroupsWorkgroupIdSellOrdersRoute,
  postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute,
  putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const orderHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdBuyOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdBuyOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdProjectsProjectIdBuyOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1WorkgroupsWorkgroupIdProjectsProjectIdSellOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSellOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdSellOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
