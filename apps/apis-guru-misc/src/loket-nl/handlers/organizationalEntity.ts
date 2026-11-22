import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentitiesRoute,
  getProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentitiesRoute,
  putProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const organizationalEntityHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsOrganizationalentitiesOrganizationalEntityIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersEmployeesEmploymentsEmploymentIdOrganizationalentitiesRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
