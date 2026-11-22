import { OpenAPIHono } from '@hono/zod-openapi'
import { patchApiPublicV2PromptsNameVersionsVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const promptVersionHandler = app.openapi(
  patchApiPublicV2PromptsNameVersionsVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
