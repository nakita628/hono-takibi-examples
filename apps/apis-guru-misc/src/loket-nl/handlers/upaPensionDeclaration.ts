import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarationsRoute,
  getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdMessageRoute,
  getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdRoute,
  patchProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdRoute,
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarationsInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const upaPensionDeclarationHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsUpapensiondeclarationsUpaPensionDeclarationIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersPayrolladministrationsPayrollAdministrationIdUpapensiondeclarationsInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
