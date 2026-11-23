import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPathwaysByTextRoute } from '../routes'

const app = new OpenAPIHono()

export const findPathwaysByTextHandler = app.openapi(getFindPathwaysByTextRoute, (c) => {
  throw new Error('Not implemented')
})
