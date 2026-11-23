import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPsd2RegistrationsIdPsd2registrationLogsRoute,
  getPsd2RegistrationsIdPsd2RegistrationRoute,
  getPsd2RegistrationsRoute,
} from '../routes'

export const getPsd2RegistrationsRouteHandler: RouteHandler<
  typeof getPsd2RegistrationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPsd2RegistrationsIdPsd2RegistrationRouteHandler: RouteHandler<
  typeof getPsd2RegistrationsIdPsd2RegistrationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPsd2RegistrationsIdPsd2registrationLogsRouteHandler: RouteHandler<
  typeof getPsd2RegistrationsIdPsd2registrationLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
