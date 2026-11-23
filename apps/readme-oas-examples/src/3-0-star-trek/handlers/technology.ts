import { OpenAPIHono } from '@hono/zod-openapi'
import { getTechnologyRoute, getTechnologySearchRoute, postTechnologySearchRoute } from '../routes'

const app = new OpenAPIHono()

export const technologyHandler = app
  .openapi(getTechnologyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTechnologySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postTechnologySearchRoute, (c) => {
    throw new Error('Not implemented')
  })
