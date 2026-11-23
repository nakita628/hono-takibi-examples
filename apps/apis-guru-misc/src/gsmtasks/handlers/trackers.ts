import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTrackersIdIndexRoute,
  getTrackersIdPublicIndexRoute,
  getTrackersIndexRoute,
  patchTrackersIdIndexRoute,
  postTrackersIndexRoute,
  putTrackersIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const trackersHandler = app
  .openapi(getTrackersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTrackersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTrackersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTrackersIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTrackersIdPublicIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
