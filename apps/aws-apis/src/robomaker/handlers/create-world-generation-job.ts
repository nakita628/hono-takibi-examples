import { OpenAPIHono } from '@hono/zod-openapi'
import { postCreateWorldGenerationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const createWorldGenerationJobHandler = app.openapi(
  postCreateWorldGenerationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
