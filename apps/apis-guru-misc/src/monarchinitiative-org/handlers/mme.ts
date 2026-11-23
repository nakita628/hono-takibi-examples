import type { RouteHandler } from '@hono/zod-openapi'
import type {
  postMmeDiseaseRoute,
  postMmeFlyRoute,
  postMmeMouseRoute,
  postMmeNematodeRoute,
  postMmeZebrafishRoute,
} from '../routes'

export const postMmeDiseaseRouteHandler: RouteHandler<typeof postMmeDiseaseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMmeFlyRouteHandler: RouteHandler<typeof postMmeFlyRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMmeMouseRouteHandler: RouteHandler<typeof postMmeMouseRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMmeNematodeRouteHandler: RouteHandler<typeof postMmeNematodeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMmeZebrafishRouteHandler: RouteHandler<typeof postMmeZebrafishRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
