import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersConceptemployeesConceptEmployeeIdSelfserviceRoute,
  getProvidersEmployersEmployerIdConceptemployeesSelfserviceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conceptEmployeeSelfServiceHandler = app
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdConceptemployeesSelfserviceRoute, (c) => {
    throw new Error('Not implemented')
  })
