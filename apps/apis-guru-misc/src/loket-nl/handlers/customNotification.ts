import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
  getProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotificationsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotificationsRoute,
  putProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const customNotificationHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsCustomnotificationsCustomNotificationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomnotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
