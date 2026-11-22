import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateSavingsPlanRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateSavingsPlanHandler = app.openapi(postCreateSavingsPlanRoute, (c) => {
  throw new Error('Not implemented')
})
