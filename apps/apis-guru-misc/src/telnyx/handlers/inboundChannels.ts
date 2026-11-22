import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPhoneNumbersInboundChannelsRoute,
  patchPhoneNumbersInboundChannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const inboundChannelsHandler = app
  .openapi(getPhoneNumbersInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchPhoneNumbersInboundChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
