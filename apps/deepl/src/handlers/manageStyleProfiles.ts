import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV3StyleProfilesStyleProfileIdRoute,
  getV3StyleProfilesRoute,
  getV3StyleProfilesStyleProfileIdRoute,
  patchV3StyleProfilesStyleProfileIdRoute,
  postV3StyleProfilesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const manageStyleProfilesHandler = app
  .openapi(getV3StyleProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3StyleProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV3StyleProfilesStyleProfileIdRoute, (c) => {
    throw new Error('Not implemented')
  })
