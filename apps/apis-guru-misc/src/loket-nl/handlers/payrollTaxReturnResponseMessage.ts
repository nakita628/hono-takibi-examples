import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdSendresponsemessageRoute } from '../routes'

const app = new OpenAPIHono()

export const payrollTaxReturnResponseMessageHandler = app.openapi(
  postProvidersEmployersPayrolladministrationsPayrolltaxreturnsPayrolltaxreturnIdSendresponsemessageRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
