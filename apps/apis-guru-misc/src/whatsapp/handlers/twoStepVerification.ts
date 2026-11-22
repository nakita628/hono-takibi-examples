import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteSettingsAccountTwoStepRoute, postSettingsAccountTwoStepRoute } from '../routes'

const app = new OpenAPIHono()

export const twoStepVerificationHandler = app
  .openapi(deleteSettingsAccountTwoStepRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSettingsAccountTwoStepRoute, (c) => {
    throw new Error('Not implemented')
  })
