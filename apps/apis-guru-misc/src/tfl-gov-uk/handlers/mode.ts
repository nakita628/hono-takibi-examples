import { OpenAPIHono } from '@hono/zod-openapi'
import { getModeActiveServiceTypesRoute, getModeModeArrivalsRoute } from '../routes'

const app = new OpenAPIHono()

export const modeHandler = app
  .openapi(getModeActiveServiceTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getModeModeArrivalsRoute, (c) => {
    throw new Error('Not implemented')
  })
