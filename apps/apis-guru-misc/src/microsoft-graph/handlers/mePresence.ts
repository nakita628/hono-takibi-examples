import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteMePresenceRoute, getMePresenceRoute, patchMePresenceRoute } from '../routes'

const app = new OpenAPIHono()

export const mePresenceHandler = app
  .openapi(deleteMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMePresenceRoute, (c) => {
    throw new Error('Not implemented')
  })
