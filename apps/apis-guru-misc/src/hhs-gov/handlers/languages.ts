import { OpenAPIHono } from '@hono/zod-openapi'
import { getResourcesLanguagesIdJsonRoute, getResourcesLanguagesJsonRoute } from '../routes'

const app = new OpenAPIHono()

export const languagesHandler = app
  .openapi(getResourcesLanguagesJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getResourcesLanguagesIdJsonRoute, (c) => {
    throw new Error('Not implemented')
  })
