import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearningsRoute,
  getProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearningsRoute,
  putProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const protectedEarningsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsProtectedearningsProtectedEarningsIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdProtectedearningsRoute, (c) => {
    throw new Error('Not implemented')
  })
