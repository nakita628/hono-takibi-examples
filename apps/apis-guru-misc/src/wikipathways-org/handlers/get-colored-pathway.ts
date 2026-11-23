import { OpenAPIHono } from '@hono/zod-openapi'
import { getGetColoredPathwayRoute } from '../routes'

const app = new OpenAPIHono()

export const getColoredPathwayHandler = app.openapi(getGetColoredPathwayRoute, (c) => {
  throw new Error('Not implemented')
})
