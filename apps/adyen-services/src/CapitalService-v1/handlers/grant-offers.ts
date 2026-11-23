import { OpenAPIHono } from '@hono/zod-openapi'
import { getGrantOffersIdRoute, getGrantOffersRoute } from '../routes'

const app = new OpenAPIHono()

export const grantOffersHandler = app
  .openapi(getGrantOffersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGrantOffersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
