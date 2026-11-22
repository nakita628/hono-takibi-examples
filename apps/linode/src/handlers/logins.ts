import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountLoginsLoginIdRoute,
  getApiVersionAccountLoginsRoute,
  getApiVersionProfileLoginsLoginIdRoute,
  getApiVersionProfileLoginsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const loginsHandler = app
  .openapi(getApiVersionAccountLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileLoginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionProfileLoginsLoginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
