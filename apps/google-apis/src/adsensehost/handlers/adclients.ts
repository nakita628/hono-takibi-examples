import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
  getAdclientsAdClientIdRoute,
  getAdclientsAdClientIdUrlchannelsRoute,
  getAdclientsRoute,
  patchAdclientsAdClientIdCustomchannelsRoute,
  postAdclientsAdClientIdCustomchannelsRoute,
  postAdclientsAdClientIdUrlchannelsRoute,
  putAdclientsAdClientIdCustomchannelsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adclientsHandler = app
  .openapi(getAdclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdRoute, (c) => {
    throw new Error('Not implemented')
  })
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
  .openapi(getAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdclientsAdClientIdUrlchannelsUrlChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
