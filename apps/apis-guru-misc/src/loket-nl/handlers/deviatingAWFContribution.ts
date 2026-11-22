import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
  getProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributionsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributionsRoute,
  putProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const deviatingAWFContributionHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsDeviatingawfcontributionsDeviatingAwfContributionIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdDeviatingawfcontributionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
