import { OpenAPIHono } from '@hono/zod-openapi'
import { getV21AccountsAccountIdPowerformsPowerFormIdFormDataRoute } from '../routes'

const app = new OpenAPIHono()

export const powerFormDataHandler = app.openapi(
  getV21AccountsAccountIdPowerformsPowerFormIdFormDataRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
