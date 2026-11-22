import { OpenAPIHono } from '@hono/zod-openapi'
import { postVersionBusinessIDOnboardPartnersToMmLiteRoute } from '../routes'

const app = new OpenAPIHono()

export const mmLiteOnboardingHandler = app.openapi(
  postVersionBusinessIDOnboardPartnersToMmLiteRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
