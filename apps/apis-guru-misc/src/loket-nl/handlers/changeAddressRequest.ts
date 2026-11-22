import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersEmployeesEmployeeIdChangeaddressrequestRoute } from '../routes'

const app = new OpenAPIHono()

export const changeAddressRequestHandler = app.openapi(
  postProvidersEmployersEmployeesEmployeeIdChangeaddressrequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
