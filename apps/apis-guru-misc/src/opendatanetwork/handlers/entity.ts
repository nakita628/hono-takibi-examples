import { OpenAPIHono } from '@hono/zod-openapi'
import { getEntityV1RelationRoute, getEntityV1Route } from '../routes'

const app = new OpenAPIHono()

export const entityHandler = app
  .openapi(getEntityV1Route, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEntityV1RelationRoute, (c) => {
    throw new Error('Not implemented')
  })
