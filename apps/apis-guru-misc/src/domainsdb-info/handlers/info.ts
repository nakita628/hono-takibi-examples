import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getInfoApiRoute,
  getInfoStatIndexRoute,
  getInfoStatZoneRoute,
  getInfoTldIndexRoute,
  getInfoTldZoneRoute,
} from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app
  .openapi(getInfoApiRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoStatIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoStatZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoTldIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfoTldZoneRoute, (c) => {
    throw new Error('Not implemented')
  })
