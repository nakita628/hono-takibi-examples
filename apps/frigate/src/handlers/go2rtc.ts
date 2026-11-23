import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteGo2rtcStreamsStreamNameRoute,
  getGo2rtcStreamsRoute,
  getGo2rtcStreamsStreamNameBitrateRoute,
  getGo2rtcStreamsStreamNameRoute,
  putGo2rtcStreamsStreamNameRoute,
} from '../routes'

const app = new OpenAPIHono()

export const go2rtcHandler = app
  .openapi(getGo2rtcStreamsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteGo2rtcStreamsStreamNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGo2rtcStreamsStreamNameBitrateRoute, (c) => {
    throw new Error('Not implemented')
  })
