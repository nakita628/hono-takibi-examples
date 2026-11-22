import { OpenAPIHono } from '@hono/zod-openapi'
import { getCopilotRoute, patchCopilotRoute } from '../routes'

const app = new OpenAPIHono()

export const copilotCopilotRootHandler = app
  .openapi(getCopilotRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCopilotRoute, (c) => {
    throw new Error('Not implemented')
  })
