import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getApiV1StatusCallRoute,
  getApiV1StatusSkuRoute,
  getApiV1VerifyNameRoute,
  getApiV1VerifyPhoneRoute,
  getApiV1VerifySkuRoute,
} from '../routes'

export const getApiV1StatusCallRouteHandler: RouteHandler<typeof getApiV1StatusCallRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1StatusSkuRouteHandler: RouteHandler<typeof getApiV1StatusSkuRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1VerifyNameRouteHandler: RouteHandler<typeof getApiV1VerifyNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getApiV1VerifyPhoneRouteHandler: RouteHandler<
  typeof getApiV1VerifyPhoneRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getApiV1VerifySkuRouteHandler: RouteHandler<typeof getApiV1VerifySkuRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
