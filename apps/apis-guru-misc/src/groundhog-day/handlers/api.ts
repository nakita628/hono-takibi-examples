import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1GroundhogsRoute,
  getApiV1GroundhogsSlugRoute,
  getApiV1PredictionsRoute,
  getApiV1Route,
  getApiV1SpecRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroundhogsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1GroundhogsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1PredictionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SpecRoute, (c) => {
    throw new Error('Not implemented')
  })
