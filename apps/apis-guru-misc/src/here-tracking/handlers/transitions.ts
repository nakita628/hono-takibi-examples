import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTransitionsV2DevicesTrackingIdRoute,
  getTransitionsV2HealthRoute,
  getTransitionsV2VersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const transitionsHandler = app
  .openapi(getTransitionsV2DevicesTrackingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitionsV2HealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTransitionsV2VersionRoute, (c) => {
    throw new Error('Not implemented')
  })
