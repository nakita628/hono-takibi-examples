import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenomeFeaturesWithinBuildReferenceBeginEndRoute } from '../routes'

const app = new OpenAPIHono()

export const genomeHandler = app.openapi(
  getGenomeFeaturesWithinBuildReferenceBeginEndRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
