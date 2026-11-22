import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiV1Route, getApiV1SpecRoute } from '../routes'

const app = new OpenAPIHono()

export const infoHandler = app
  .openapi(getApiV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiV1SpecRoute, (c) => {
    throw new Error('Not implemented')
  })
