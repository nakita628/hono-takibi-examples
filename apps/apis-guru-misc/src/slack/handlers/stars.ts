import { OpenAPIHono } from '@hono/zod-openapi'
import { getStarsListRoute, postStarsAddRoute, postStarsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const starsHandler = app
  .openapi(postStarsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getStarsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStarsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
