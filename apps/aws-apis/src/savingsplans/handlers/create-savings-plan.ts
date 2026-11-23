import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSavingsPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const createSavingsPlanHandler = app.openapi(postCreateSavingsPlanRoute, (c) => {
  throw new Error('Not implemented')
})
