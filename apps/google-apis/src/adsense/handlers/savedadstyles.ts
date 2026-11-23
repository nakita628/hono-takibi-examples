import { OpenAPIHono } from '@hono/zod-openapi'
import { getSavedadstylesRoute, getSavedadstylesSavedAdStyleIdRoute } from '../routes'

const app = new OpenAPIHono()

export const savedadstylesHandler = app
  .openapi(getSavedadstylesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSavedadstylesSavedAdStyleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
