import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiTaxAllRoute,
  postApiTaxDeleteRoute,
  postApiTaxNewRoute,
  postApiTaxUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const taxHandler = app
  .openapi(getApiTaxAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxNewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postApiTaxUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
