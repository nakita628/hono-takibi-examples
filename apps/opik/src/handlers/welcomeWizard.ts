import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1PrivateWelcomeWizardRoute, postV1PrivateWelcomeWizardRoute } from '../routes'

const app = new OpenAPIHono()

export const welcomeWizardHandler = app
  .openapi(getV1PrivateWelcomeWizardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1PrivateWelcomeWizardRoute, (c) => {
    throw new Error('Not implemented')
  })
