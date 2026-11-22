import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1WorkgroupsWorkgroupIdMyTimeCardsRoute,
  getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRoute,
  getV1WorkgroupsWorkgroupIdReceivedTimeCardsRoute,
  getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeCardHandler = app
  .openapi(getV1WorkgroupsWorkgroupIdMyTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdMyTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdReceivedTimeCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1WorkgroupsWorkgroupIdReceivedTimeCardsTimeCardIdRoute, (c) => {
    throw new Error('Not implemented')
  })
