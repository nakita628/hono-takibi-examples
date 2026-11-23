import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getPatientmanagementDiagnosesRoute,
  getPatientmanagementLookuptypesRoute,
  getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute,
  postPatientmanagementValidateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const patientmanagementHandler = app
  .openapi(getPatientmanagementDiagnosesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientmanagementLookuptypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientmanagementValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute, (c) => {
    throw new Error('Not implemented')
  })
