import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsRefConfigRealtimeRoute,
  patchV1ProjectsRefConfigRealtimeRoute,
  postV1ProjectsRefConfigRealtimeShutdownRoute,
} from '../routes'

const app = new OpenAPIHono()

export const realtimeHandler = app
  .openapi(getV1ProjectsRefConfigRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV1ProjectsRefConfigRealtimeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProjectsRefConfigRealtimeShutdownRoute, (c) => {
    throw new Error('Not implemented')
  })
