import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPatientmanagementDiagnosesRoute,
  getPatientmanagementLookuptypesRoute,
  getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute,
  postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute,
  postPatientmanagementValidateRoute,
} from '../routes'

export const getPatientmanagementDiagnosesRouteHandler: RouteHandler<
  typeof getPatientmanagementDiagnosesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPatientmanagementLookuptypesRouteHandler: RouteHandler<
  typeof getPatientmanagementLookuptypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPatientmanagementValidateRouteHandler: RouteHandler<
  typeof postPatientmanagementValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler: RouteHandler<
  typeof getPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRouteHandler: RouteHandler<
  typeof postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRouteHandler: RouteHandler<
  typeof postPatientmanagementUserIdGroupGroupIdIdentifierIdentifierIdSurgeriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
