import { OpenAPIHono } from '@hono/zod-openapi'
import { getGoogleDirectoriesIdRoute, getGoogleDirectoriesRoute } from '../routes'

const app = new OpenAPIHono()

export const googleDirectoriesHandler = app
  .openapi(getGoogleDirectoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getGoogleDirectoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
