import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFineTunesFineTuneIdEventsRoute,
  getFineTunesFineTuneIdRoute,
  getFineTunesRoute,
  postFineTunesFineTuneIdCancelRoute,
  postFineTunesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fineTunesHandler = app
  .openapi(getFineTunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTunesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTunesFineTuneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postFineTunesFineTuneIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFineTunesFineTuneIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
