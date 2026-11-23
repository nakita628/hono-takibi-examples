import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMacieRoute,
  getMacieRoute,
  patchMacieMembersIdRoute,
  patchMacieRoute,
  postMacieRoute,
} from '../routes'

export const deleteMacieRouteHandler: RouteHandler<typeof deleteMacieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMacieRouteHandler: RouteHandler<typeof postMacieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getMacieRouteHandler: RouteHandler<typeof getMacieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMacieRouteHandler: RouteHandler<typeof patchMacieRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const patchMacieMembersIdRouteHandler: RouteHandler<
  typeof patchMacieMembersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
