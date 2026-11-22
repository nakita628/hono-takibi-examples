import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute,
  getAdclientsAdClientIdUrlchannelsRoute,
  postAdclientsAdClientIdUrlchannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const urlchannelsHandler = app
  .openapi(getAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
