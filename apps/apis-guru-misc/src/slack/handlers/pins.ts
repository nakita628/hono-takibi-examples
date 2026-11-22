import { OpenAPIHono } from '@hono/zod-openapi'
import { getPinsListRoute, postPinsAddRoute, postPinsRemoveRoute } from '../routes'

const app = new OpenAPIHono()

export const pinsHandler = app
  .openapi(postPinsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPinsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPinsRemoveRoute, (c) => {
    throw new Error('Not implemented')
  })
