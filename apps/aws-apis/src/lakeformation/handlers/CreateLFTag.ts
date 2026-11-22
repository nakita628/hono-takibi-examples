import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateLFTagRoute } from '../routes'

const app = new OpenAPIHono()

export const CreateLFTagHandler = app.openapi(postCreateLFTagRoute, (c) => {
  throw new Error('Not implemented')
})
