import { OpenAPIHono } from '@hono/zod-openapi'
import { getTalentRoute } from '../routes'

const app = new OpenAPIHono()

export const talentHandler = app.openapi(getTalentRoute, (c) => {
  throw new Error('Not implemented')
})
