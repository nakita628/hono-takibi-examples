import { OpenAPIHono } from '@hono/zod-openapi'
import { patchProvidersEmployersPayrollAdministrationsPayrollAdministrationIdMdvNotificationsRoute } from '../routes'

const app = new OpenAPIHono()

export const mdvNotificationsHandler = app.openapi(
  patchProvidersEmployersPayrollAdministrationsPayrollAdministrationIdMdvNotificationsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
