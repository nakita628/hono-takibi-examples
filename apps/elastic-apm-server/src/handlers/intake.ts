import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postIntakeV2EventsRoute,
  postIntakeV2RumEventsRoute,
  postIntakeV3RumEventsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const intakeHandler = app
  .openapi(postIntakeV2EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntakeV2RumEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postIntakeV3RumEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
