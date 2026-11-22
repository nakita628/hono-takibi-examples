import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOverlaysIdRoute,
  getOverlaysIdRoute,
  getOverlaysRoute,
  patchOverlaysIdRoute,
  postOverlaysRoute,
} from '../routes'

const app = new OpenAPIHono()

export const overlaysHandler = app
  .openapi(getOverlaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postOverlaysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOverlaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOverlaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOverlaysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
