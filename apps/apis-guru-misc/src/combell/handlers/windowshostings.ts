import { OpenAPIHono } from '@hono/zod-openapi'
import { getWindowshostingsDomainNameRoute, getWindowshostingsRoute } from '../routes'

const app = new OpenAPIHono()

export const windowshostingsHandler = app
  .openapi(getWindowshostingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWindowshostingsDomainNameRoute, (c) => {
    throw new Error('Not implemented')
  })
