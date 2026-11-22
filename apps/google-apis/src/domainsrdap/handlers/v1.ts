import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1DomainsRoute,
  getV1EntitiesRoute,
  getV1HelpRoute,
  getV1IpRoute,
  getV1NameserversRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(getV1DomainsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HelpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IpRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NameserversRoute, (c) => {
    throw new Error('Not implemented')
  })
