import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
  getProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculationRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculationRoute,
  putProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const baseForEmploymentFundCalculationHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsBasesforemploymentfundcalculationBaseforemploymentfundcalculationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdBasesforemploymentfundcalculationRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
