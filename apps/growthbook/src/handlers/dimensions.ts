import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1DimensionsIdRoute,
  getV1DimensionsIdRoute,
  getV1DimensionsRoute,
  postV1DimensionsIdRoute,
  postV1DimensionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dimensionsHandler = app
  .openapi(getV1DimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DimensionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1DimensionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
