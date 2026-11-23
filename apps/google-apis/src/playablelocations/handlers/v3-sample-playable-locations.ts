import { OpenAPIHono } from '@hono/zod-openapi'
import { postV3SamplePlayableLocationsRoute } from '../routes'

const app = new OpenAPIHono()

export const v3SamplePlayableLocationsHandler = app.openapi(
  postV3SamplePlayableLocationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
