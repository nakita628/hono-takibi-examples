import { OpenAPIHono } from '@hono/zod-openapi'
import { postProvidersEmployersEmployeesEmployeeIdChangecontactinformationrequestRoute } from '../routes'

const app = new OpenAPIHono()

export const changeContactinformationRequestHandler = app.openapi(
  postProvidersEmployersEmployeesEmployeeIdChangecontactinformationrequestRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
