import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAreasRoute,
  getEventsRoute,
  getJurisdictiongeographyRoute,
  getJurisdictionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const resourcesHandler = app
  .openapi(getAreasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJurisdictionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getJurisdictiongeographyRoute, (c) => {
    throw new Error('Not implemented')
  })
