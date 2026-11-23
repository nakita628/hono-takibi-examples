import { OpenAPIHono } from '@hono/zod-openapi'
import { postConvertWeightRoute } from '../routes'

const app = new OpenAPIHono()

export const convertWeightHandler = app.openapi(postConvertWeightRoute, (c) => {
  throw new Error('Not implemented')
})
