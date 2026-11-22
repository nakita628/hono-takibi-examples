import { OpenAPIHono } from '@hono/zod-openapi'
import { getWebSearchResearchTaskIdRoute, postWebSearchResearchRoute } from '../routes'

const app = new OpenAPIHono()

export const researchHandler = app
  .openapi(postWebSearchResearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getWebSearchResearchTaskIdRoute, (c) => {
    throw new Error('Not implemented')
  })
