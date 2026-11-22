import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepaymentsRoute,
  getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepaymentsRoute,
  putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const paymentInformationSeparatePaymentsHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsPaymentinformationsepaseparatepaymentsPaymentInformationSepaSeparatePaymentIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepaymentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdPaymentinformationsepaseparatepaymentsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
