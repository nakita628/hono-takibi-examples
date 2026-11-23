import { OpenAPIHono } from '@hono/zod-openapi'
import { getDevelopersIdRoute, getDevelopersRoute } from '../routes'

const app = new OpenAPIHono()

export const developersHandler = app
  .openapi(getDevelopersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDevelopersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
