import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteLegsLegIdRoute, getLegsRoute } from '../routes'

const app = new OpenAPIHono()

export const legsHandler = app
  .openapi(getLegsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteLegsLegIdRoute, (c) => {
    throw new Error('Not implemented')
  })
