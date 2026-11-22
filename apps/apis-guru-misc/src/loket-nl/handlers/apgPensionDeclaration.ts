import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdMessageRoute,
  getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdOverviewRoute,
  getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdRoute,
  getProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarationsRoute,
  patchProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdRoute,
  postProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarationsInitiateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const apgPensionDeclarationHandler = app
  .openapi(
    getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdMessageRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsApgpensiondeclarationsApgPensionDeclarationIdOverviewRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarationsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postProvidersEmployersPayrolladministrationsPayrollAdministrationIdApgpensiondeclarationsInitiateRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
