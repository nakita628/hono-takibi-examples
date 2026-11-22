import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getAdminRequestsUnmatchedNearMissesRoute,
  postAdminNearMissesRequestPatternRoute,
  postAdminNearMissesRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const nearMissesHandler = app
  .openapi(postAdminNearMissesRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminNearMissesRequestPatternRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRequestsUnmatchedNearMissesRoute, (c) => {
    throw new Error('Not implemented')
  })
