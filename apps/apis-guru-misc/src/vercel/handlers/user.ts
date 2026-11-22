import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteV1UserRoute, getV2UserRoute, getV3EventsRoute } from '../routes'

const app = new OpenAPIHono()

export const userHandler = app
  .openapi(deleteV1UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2UserRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3EventsRoute, (c) => {
    throw new Error('Not implemented')
  })
