import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersEmployerIdActualorganizationalentitiesRoute,
  getProvidersEmployersEmployerIdActualwagesRoute,
  getProvidersEmployersEmployerIdActualworkinghoursRoute,
  getProvidersEmployersEmployerIdEmployeesActualpartnersRoute,
  getProvidersEmployersEmployerIdEmployeesChildrenRoute,
  getProvidersEmployersEmployerIdEmployeesContactsRoute,
  getProvidersEmployersEmployerIdEmployeesEmploymentsActualbenefitsanddeductionsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const actualsHandler = app
  .openapi(getProvidersEmployersEmployerIdActualorganizationalentitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdActualwagesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdActualworkinghoursRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesActualpartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEmployeesContactsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getProvidersEmployersEmployerIdEmployeesEmploymentsActualbenefitsanddeductionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
