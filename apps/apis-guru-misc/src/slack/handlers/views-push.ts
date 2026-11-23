import { OpenAPIHono } from '@hono/zod-openapi'
import { getViewsPushRoute } from '../routes'

const app = new OpenAPIHono()

export const viewsPushHandler = app.openapi(getViewsPushRoute, (c) => {
  throw new Error('Not implemented')
})
