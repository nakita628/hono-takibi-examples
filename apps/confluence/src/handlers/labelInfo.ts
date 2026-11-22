import { OpenAPIHono } from '@hono/zod-openapi'
import { getWikiRestApiLabelRoute } from '../routes'

const app = new OpenAPIHono()

export const labelInfoHandler = app.openapi(getWikiRestApiLabelRoute, (c) => {
  throw new Error('Not implemented')
})
