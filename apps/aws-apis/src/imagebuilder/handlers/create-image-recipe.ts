import { OpenAPIHono } from '@hono/zod-openapi'
import { putCreateImageRecipeRoute } from '../routes'

const app = new OpenAPIHono()

export const createImageRecipeHandler = app.openapi(putCreateImageRecipeRoute, (c) => {
  throw new Error('Not implemented')
})
