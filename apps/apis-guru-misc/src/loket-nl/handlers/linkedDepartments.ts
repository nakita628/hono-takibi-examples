import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdUsersDepartmentsRoute,
  patchProvidersEmployersEmployerIdUsersUserIdDepartmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const linkedDepartmentsHandler = app
  .openapi(getProvidersEmployersEmployerIdUsersDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersEmployerIdUsersUserIdDepartmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
