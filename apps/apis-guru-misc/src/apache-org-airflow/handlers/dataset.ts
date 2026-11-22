import { OpenAPIHono } from '@hono/zod-openapi'
import { getDatasetsEventsRoute, getDatasetsRoute, getDatasetsUriRoute } from '../routes'

const app = new OpenAPIHono()

export const datasetHandler = app
  .openapi(getDatasetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsEventsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDatasetsUriRoute, (c) => {
    throw new Error('Not implemented')
  })
