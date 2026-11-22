import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
  getProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfieldsRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfieldsRoute,
  putProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const employmentCustomFieldHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsCustomfieldsEmploymentCustomFieldIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdCustomfieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
