import { OpenAPIHono } from '@hono/zod-openapi'
import { postModerationFlagRoute, postModerationUnflagRoute } from '../routes'

const app = new OpenAPIHono()

export const moderationHandler = app
  .openapi(postModerationFlagRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postModerationUnflagRoute, (c) => {
    throw new Error('Not implemented')
  })
