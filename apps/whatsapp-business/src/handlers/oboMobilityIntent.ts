import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getVersionOBOMobilityIntentIDRoute,
  postVersionWABAIDOboMobilityIntentRoute,
  postVersionWABAIDSetOboMobilityIntentRoute,
} from '../routes'

const app = new OpenAPIHono()

export const oboMobilityIntentHandler = app
  .openapi(getVersionOBOMobilityIntentIDRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDOboMobilityIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postVersionWABAIDSetOboMobilityIntentRoute, (c) => {
    throw new Error('Not implemented')
  })
