import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customchannelsHandler = app
  .openapi(getAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
