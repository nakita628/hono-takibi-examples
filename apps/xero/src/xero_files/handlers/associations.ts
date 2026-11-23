import { OpenAPIHono } from '@hono/zod-openapi'
import { getAssociationsCountRoute, getAssociationsObjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const associationsHandler = app
  .openapi(getAssociationsObjectIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAssociationsCountRoute, (c) => {
    throw new Error('Not implemented')
  })
