import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getContractIdRoute,
  optionsContractIdRoute,
  optionsContractRoute,
  postContractIdRoute,
  postContractRoute,
} from '../routes'

export const optionsContractRouteHandler: RouteHandler<typeof optionsContractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postContractRouteHandler: RouteHandler<typeof postContractRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getContractIdRouteHandler: RouteHandler<typeof getContractIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsContractIdRouteHandler: RouteHandler<typeof optionsContractIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postContractIdRouteHandler: RouteHandler<typeof postContractIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
