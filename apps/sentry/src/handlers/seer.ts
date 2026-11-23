import { OpenAPIHono } from '@hono/zod-openapi'
import { getSeerModelsIndexRoute } from '../routes'

const app = new OpenAPIHono()

export const seerHandler = app.openapi(getSeerModelsIndexRoute, (c) => {
  throw new Error('Not implemented')
})
