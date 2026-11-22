import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdEmployeesEmploymentsLastmodifiedversionnumbersRoute,
  getProvidersEmployersLastmodifiedversionnumbersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const lastModifiedVersionNumbersHandler = app
  .openapi(getProvidersEmployersLastmodifiedversionnumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployerIdEmployeesEmploymentsLastmodifiedversionnumbersRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
