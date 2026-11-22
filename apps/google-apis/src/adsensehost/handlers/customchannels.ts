import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
  patchAdclientsAdClientIdCustomchannelsRoute,
  postAdclientsAdClientIdCustomchannelsRoute,
  putAdclientsAdClientIdCustomchannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customchannelsHandler = app
  .openapi(getAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
