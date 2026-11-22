import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdclientsAdClientIdAdunitsAdUnitIdAdcodeRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdCustomchannelsRoute,
  getAdclientsAdClientIdAdunitsAdUnitIdRoute,
  getAdclientsAdClientIdAdunitsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const adunitsHandler = app
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
