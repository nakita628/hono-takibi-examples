import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
  getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalpropertiesRoute,
  getProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
  postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalpropertiesRoute,
  putProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fiscalPropertiesHandler = app
  .openapi(
    deleteProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    putProvidersEmployersEmployeesEmploymentsFiscalpropertiesFiscalPropertiesIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalpropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployeesEmploymentsEmploymentIdFiscalpropertiesRoute, (c) => {
    throw new Error('Not implemented')
  })
