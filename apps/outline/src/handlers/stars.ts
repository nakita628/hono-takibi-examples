import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postStarsCreateRoute,
  postStarsDeleteRoute,
  postStarsListRoute,
  postStarsUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const starsHandler = app
  .openapi(postStarsCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStarsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStarsUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postStarsDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
