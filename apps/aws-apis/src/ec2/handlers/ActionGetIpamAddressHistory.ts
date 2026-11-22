import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetIpamAddressHistoryRoute,
  postActionGetIpamAddressHistoryRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetIpamAddressHistoryHandler = app
  .openapi(getActionGetIpamAddressHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetIpamAddressHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
