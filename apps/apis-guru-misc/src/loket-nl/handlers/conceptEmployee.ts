import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProvidersEmployersConceptemployeesConceptEmployeeIdRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumberRoute,
  getProvidersEmployersConceptemployeesConceptEmployeeIdRoute,
  getProvidersEmployersConceptemployeesMinimizedConceptEmployeeIdRoute,
  getProvidersEmployersEmployerIdConceptemployeesRoute,
  patchProvidersEmployersConceptemployeesConceptEmployeeIdConvertToEmployeeRoute,
  postProvidersEmployersEmployerIdConceptemployeesRoute,
  putProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumberRoute,
  putProvidersEmployersConceptemployeesConceptEmployeeIdRoute,
  putProvidersEmployersConceptemployeesMinimizedConceptEmployeeIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const conceptEmployeeHandler = app
  .openapi(getProvidersEmployersConceptemployeesMinimizedConceptEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersConceptemployeesMinimizedConceptEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProvidersEmployersConceptemployeesConceptEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersConceptemployeesConceptEmployeeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putProvidersEmployersConceptemployeesConceptEmployeeIdCitizenservicenumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProvidersEmployersConceptemployeesConceptEmployeeIdConvertToEmployeeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProvidersEmployersEmployerIdConceptemployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProvidersEmployersEmployerIdConceptemployeesRoute, (c) => {
    throw new Error('Not implemented')
  })
