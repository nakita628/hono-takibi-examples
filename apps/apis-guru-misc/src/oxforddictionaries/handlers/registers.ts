import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getRegistersSourceLanguageRoute,
  getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute,
} from '../routes'

export const getRegistersSourceLanguageRouteHandler: RouteHandler<
  typeof getRegistersSourceLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRegistersSourceRegisterLanguageTargetRegisterLanguageRouteHandler: RouteHandler<
  typeof getRegistersSourceRegisterLanguageTargetRegisterLanguageRoute
> = async (c) => {
  throw new Error('Not implemented')
}
