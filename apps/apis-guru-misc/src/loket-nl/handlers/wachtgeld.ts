import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeldRoute,
  getProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeldRoute,
  putProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const wachtgeldHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsWachtgeldWachtegeldenIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdWachtgeldRoute, (c) => {
    throw new Error('Not implemented')
  })
