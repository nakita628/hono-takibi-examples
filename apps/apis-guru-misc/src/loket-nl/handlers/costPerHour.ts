import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute,
  getProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhourRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhourRoute,
  putProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const costPerHourHandler = app
  .openapi(deleteProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesEmploymentsCostperhourCostperhourIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhourRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdCostperhourRoute, (c) => {
    throw new Error('Not implemented')
  })
