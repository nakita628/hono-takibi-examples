import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteTimeLocationFeaturesIdIndexRoute,
  getTimeLocationFeaturesIdIndexRoute,
  getTimeLocationFeaturesIndexRoute,
  patchTimeLocationFeaturesIdIndexRoute,
  postTimeLocationFeaturesIndexRoute,
  putTimeLocationFeaturesIdIndexRoute,
} from '../routes'

const app = new OpenAPIHono()

export const timeLocationFeaturesHandler = app
  .openapi(getTimeLocationFeaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTimeLocationFeaturesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteTimeLocationFeaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTimeLocationFeaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchTimeLocationFeaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putTimeLocationFeaturesIdIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
