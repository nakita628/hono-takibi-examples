import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiV1StatusBuildinfoRoute,
  getApiV1StatusConfigDefaultRoute,
  getApiV1StatusConfigDiffRoute,
  getApiV1StatusConfigRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app
  .openapi(getApiV1StatusBuildinfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusConfigRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusConfigDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1StatusConfigDiffRoute, (c) => {
    throw new Error('Not implemented')
  })
