import { OpenAPIHono } from '@hono/zod-openapi'
import { getScenariosIdEventsRoute, postScenariosIdEventsRoute } from '../routes'

const app = new OpenAPIHono()

export const scenariosHandler = app
  .openapi(getScenariosIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postScenariosIdEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
