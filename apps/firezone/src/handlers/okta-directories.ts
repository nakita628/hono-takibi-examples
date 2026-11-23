import { OpenAPIHono } from '@hono/zod-openapi'
import { getOktaDirectoriesIdRoute, getOktaDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const oktaDirectoriesHandler = app
  .openapi(getOktaDirectoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOktaDirectoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
