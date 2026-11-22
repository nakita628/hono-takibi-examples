import { OpenAPIHono } from '@hono/zod-openapi'
import { getTykReloadGroupRoute, getTykReloadRoute } from '../routes'

const app = new OpenAPIHono()

export const hotReloadHandler = app
  .openapi(getTykReloadRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTykReloadGroupRoute, (c) => {
    throw new Error('Not implemented')
  })
