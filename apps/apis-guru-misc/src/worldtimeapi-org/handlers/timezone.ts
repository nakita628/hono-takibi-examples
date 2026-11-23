import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTimezoneAreaLocationRegionRoute,
  getTimezoneAreaLocationRegionTxtRoute,
  getTimezoneAreaLocationRoute,
  getTimezoneAreaLocationTxtRoute,
  getTimezoneAreaRoute,
  getTimezoneAreaTxtRoute,
  getTimezoneRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timezoneHandler = app
  .openapi(getTimezoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaLocationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaLocationTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaLocationRegionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimezoneAreaLocationRegionTxtRoute, (c) => {
    throw new Error('Not implemented')
  })
