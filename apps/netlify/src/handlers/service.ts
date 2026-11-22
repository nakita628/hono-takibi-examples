import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getServicesAddonNameManifestRoute,
  getServicesAddonNameRoute,
  getServicesIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const serviceHandler = app
  .openapi(getServicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesAddonNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getServicesAddonNameManifestRoute, (c) => {
    throw new Error('Not implemented')
  })
