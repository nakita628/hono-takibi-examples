import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepaRoute,
  getProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepaRoute,
  putProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInformationNonSEPAHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsPaymentinformationnonsepaPaymentInformationNonSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationnonsepaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
