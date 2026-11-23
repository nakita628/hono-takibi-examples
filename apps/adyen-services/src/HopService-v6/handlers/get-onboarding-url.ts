import { OpenAPIHono } from '@hono/zod-openapi'
import { postGetOnboardingUrlRoute } from '../routes'

const app = new OpenAPIHono()

export const getOnboardingUrlHandler = app.openapi(postGetOnboardingUrlRoute, (c) => {
  throw new Error('Not implemented')
})
