import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersEducationtypesEducationTypeIdRoute,
  getProvidersEmployersEducationtypesEducationTypeIdRoute,
  getProvidersEmployersEmployerIdEducationtypesRoute,
  postProvidersEmployersEmployerIdEducationtypesRoute,
  putProvidersEmployersEducationtypesEducationTypeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const educationTypeHandler = app
  .openapi(deleteProvidersEmployersEducationtypesEducationTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEducationtypesEducationTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersEducationtypesEducationTypeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdEducationtypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdEducationtypesRoute, (c) => {
    throw new Error('Not implemented')
  })
