import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesPartnersPartnerIdRoute,
  getProvidersEmployersEmployeesEmployeeIdPartnersRoute,
  getProvidersEmployersEmployeesPartnersPartnerIdRoute,
  postProvidersEmployersEmployeesEmployeeIdPartnersRoute,
  putProvidersEmployersEmployeesPartnersPartnerIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const partnerHandler = app
  .openapi(deleteProvidersEmployersEmployeesPartnersPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesPartnersPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEmployeesPartnersPartnerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployeesEmployeeIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmployeeIdPartnersRoute, (c) => {
    throw new Error('Not implemented')
  })
