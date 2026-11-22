import { OpenAPIHono } from '@hono/zod-openapi'
import { postCancelWorldGenerationJobRoute } from '../routes'

const app = new OpenAPIHono()

export const cancelWorldGenerationJobHandler = app.openapi(
  postCancelWorldGenerationJobRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
