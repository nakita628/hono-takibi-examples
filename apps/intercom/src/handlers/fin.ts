import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postFinStartRoute,
  postFinReplyRoute,
  postFinCsatRoute,
  postFinCapabilitiesRoute,
  postFinAskRoute,
  postFinProceduresProcedureIdRunRoute,
  postFinEscalateRoute,
} from '../routes'

export const postFinStartRouteHandler: RouteHandler<typeof postFinStartRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinReplyRouteHandler: RouteHandler<typeof postFinReplyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinCsatRouteHandler: RouteHandler<typeof postFinCsatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinCapabilitiesRouteHandler: RouteHandler<
  typeof postFinCapabilitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinAskRouteHandler: RouteHandler<typeof postFinAskRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinProceduresProcedureIdRunRouteHandler: RouteHandler<
  typeof postFinProceduresProcedureIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postFinEscalateRouteHandler: RouteHandler<typeof postFinEscalateRoute> = async (c) => {
  throw new Error('Not implemented')
}
