import { OpenAPIHono } from '@hono/zod-openapi'
import { getPlatformsIdRoute, getPlatformsListsParentsRoute, getPlatformsRoute } from '../routes'

const app = new OpenAPIHono()

export const platformsHandler = app
  .openapi(getPlatformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformsListsParentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPlatformsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
