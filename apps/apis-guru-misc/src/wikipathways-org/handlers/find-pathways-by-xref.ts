import { OpenAPIHono } from '@hono/zod-openapi'
import { getFindPathwaysByXrefRoute } from '../routes'

const app = new OpenAPIHono()

export const findPathwaysByXrefHandler = app.openapi(getFindPathwaysByXrefRoute, (c) => {
  throw new Error('Not implemented')
})
