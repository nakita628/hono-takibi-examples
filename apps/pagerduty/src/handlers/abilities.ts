import { OpenAPIHono } from '@hono/zod-openapi'
import { getAbilitiesIdRoute, getAbilitiesRoute } from '../routes'

const app = new OpenAPIHono()

export const abilitiesHandler = app
  .openapi(getAbilitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAbilitiesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
