import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDrillersIndexRoute,
  getDrillersNamesIndexRoute,
  getDrillersPersonGuidFilesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const drillersHandler = app
  .openapi(getDrillersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrillersNamesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDrillersPersonGuidFilesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
