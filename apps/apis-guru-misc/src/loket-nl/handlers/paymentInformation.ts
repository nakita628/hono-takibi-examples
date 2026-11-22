import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaRoute,
  getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaRoute,
  putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInformationHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaPaymentInformationSepaIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
