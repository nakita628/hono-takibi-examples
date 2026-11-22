import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulatedbasicjournalresultsreportRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulationsandbalancesreportRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualpayrolltaxreturnreportRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualwagesheetreportRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAttachmentsofearningsreportRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdDeviatingpremiumswabRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolladministrationsettingsreportRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payrollAdministrationReportsHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulatedbasicjournalresultsreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAccumulationsandbalancesreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualpayrolltaxreturnreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAnnualwagesheetreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdAttachmentsofearningsreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdDeviatingpremiumswabRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdPayrolladministrationsettingsreportRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
