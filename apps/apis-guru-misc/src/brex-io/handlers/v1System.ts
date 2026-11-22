import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1SystemCountriesRoute,
  getApiV1SystemHealthRoute,
  getApiV1SystemPricelistRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1SystemHandler = app
  .openapi(getApiV1SystemCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemHealthRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SystemPricelistRoute, (c) => {
    throw new Error('Not implemented')
  })
