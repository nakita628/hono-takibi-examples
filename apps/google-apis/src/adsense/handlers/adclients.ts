import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAdclientsAdClientIdAdunitsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute,
  getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute,
  getAdclientsAdClientIdCustomchannelsRoute,
  getAdclientsAdClientIdUrlchannelsRoute,
  getAdclientsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adclientsHandler = app
  .openapi(getAdclientsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdAdunitsAdUnitIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsCustomChannelIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdCustomchannelsCustomChannelIdAdunitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdclientsAdClientIdUrlchannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
