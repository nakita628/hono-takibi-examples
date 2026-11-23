import { OpenAPIHono } from '@hono/zod-openapi'
import { getBeneficiariesRoute } from '../routes'

const app = new OpenAPIHono()

export const beneficiariesHandler = app.openapi(getBeneficiariesRoute, (c) => {
  throw new Error('Not implemented')
})
