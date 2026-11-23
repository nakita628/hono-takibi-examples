import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteLettersLtrIdRoute,
  getLettersLtrIdRoute,
  getLettersRoute,
  postLettersRoute,
} from '../routes'

export const getLettersLtrIdRouteHandler: RouteHandler<typeof getLettersLtrIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteLettersLtrIdRouteHandler: RouteHandler<typeof deleteLettersLtrIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getLettersRouteHandler: RouteHandler<typeof getLettersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postLettersRouteHandler: RouteHandler<typeof postLettersRoute> = async (c) => {
  throw new Error('Not implemented')
}
