import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteMocksMockUidRoute,
  deleteMocksMockUidUnpublishRoute,
  getMocksMockUidRoute,
  getMocksRoute,
  postMocksMockUidPublishRoute,
  postMocksRoute,
  putMocksMockUidRoute,
} from '../routes'

export const getMocksRouteHandler: RouteHandler<typeof getMocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMocksRouteHandler: RouteHandler<typeof postMocksRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMocksMockUidRouteHandler: RouteHandler<typeof deleteMocksMockUidRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getMocksMockUidRouteHandler: RouteHandler<typeof getMocksMockUidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putMocksMockUidRouteHandler: RouteHandler<typeof putMocksMockUidRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postMocksMockUidPublishRouteHandler: RouteHandler<
  typeof postMocksMockUidPublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteMocksMockUidUnpublishRouteHandler: RouteHandler<
  typeof deleteMocksMockUidUnpublishRoute
> = async (c) => {
  throw new Error('Not implemented')
}
