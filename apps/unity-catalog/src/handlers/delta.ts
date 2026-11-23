import { OpenAPIHono } from '@hono/zod-openapi'
import { getDeltaPreviewCommitsRoute, postDeltaPreviewCommitsRoute } from '../routes'

const app = new OpenAPIHono()

export const deltaHandler = app
  .openapi(getDeltaPreviewCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDeltaPreviewCommitsRoute, (c) => {
    throw new Error('Not implemented')
  })
