import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getActionGetReservedNodeExchangeConfigurationOptionsRoute,
  postActionGetReservedNodeExchangeConfigurationOptionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const ActionGetReservedNodeExchangeConfigurationOptionsHandler = app
  .openapi(getActionGetReservedNodeExchangeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postActionGetReservedNodeExchangeConfigurationOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
