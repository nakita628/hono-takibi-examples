import { OpenAPIHono } from '@hono/zod-openapi'
import { postSetupBeneficiaryRoute } from '../routes'

const app = new OpenAPIHono()

export const setupBeneficiaryHandler = app.openapi(postSetupBeneficiaryRoute, (c) => {
  throw new Error('Not implemented')
})
