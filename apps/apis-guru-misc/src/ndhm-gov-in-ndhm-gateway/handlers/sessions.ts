import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV05CertsRoute,
  getV05WellKnownOpenidConfigurationRoute,
  postV05SessionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const sessionsHandler = app
  .openapi(getV05WellKnownOpenidConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV05CertsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05SessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
