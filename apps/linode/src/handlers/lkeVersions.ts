import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionLkeTiersTierVersionsRoute,
  getApiVersionLkeTiersTierVersionsVersionRoute,
  getApiVersionLkeVersionsRoute,
  getApiVersionLkeVersionsVersionRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lkeVersionsHandler = app
  .openapi(getApiVersionLkeTiersTierVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeTiersTierVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionLkeVersionsVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
