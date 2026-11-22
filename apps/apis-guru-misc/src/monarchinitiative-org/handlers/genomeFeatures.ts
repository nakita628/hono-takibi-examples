import { OpenAPIHono } from '@hono/zod-openapi'
import { getGenomeFeaturesWithinBuildReferenceBeginEndRoute } from '../routes'

const app = new OpenAPIHono()

export const genomeFeaturesHandler = app.openapi(
  getGenomeFeaturesWithinBuildReferenceBeginEndRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
