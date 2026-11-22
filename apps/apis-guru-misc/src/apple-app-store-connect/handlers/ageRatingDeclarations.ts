import { OpenAPIHono } from '@hono/zod-openapi'
import { patchV1AgeRatingDeclarationsIdRoute } from '../routes'

const app = new OpenAPIHono()

export const ageRatingDeclarationsHandler = app.openapi(
  patchV1AgeRatingDeclarationsIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
