import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1UsersMeCapabilitiesRoute,
  getV1UsersMeProfileRoute,
  getV1UsersMeRoute,
} from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(getV1UsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersMeCapabilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1UsersMeProfileRoute, (c) => {
    throw new Error('Not implemented')
  })
