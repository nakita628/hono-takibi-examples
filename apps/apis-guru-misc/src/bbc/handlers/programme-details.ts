import { OpenAPIHono } from '@hono/zod-openapi'
import { getProgrammeDetailsRoute } from '../routes'

const app = new OpenAPIHono()

export const programmeDetailsHandler = app.openapi(getProgrammeDetailsRoute, (c) => {
  throw new Error('Not implemented')
})
