import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1NameRoute,
  getV1ParentBooksRoute,
  getV1ShelvesRoute,
  postV1NameBorrowRoute,
  postV1NameReturnRoute,
} from '../routes'

export const getV1ShelvesRouteHandler: RouteHandler<typeof getV1ShelvesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NameRouteHandler: RouteHandler<typeof getV1NameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NameBorrowRouteHandler: RouteHandler<typeof postV1NameBorrowRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1NameReturnRouteHandler: RouteHandler<typeof postV1NameReturnRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ParentBooksRouteHandler: RouteHandler<typeof getV1ParentBooksRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
