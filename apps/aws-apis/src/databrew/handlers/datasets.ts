import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatasetsNameRoute,
  getDatasetsNameRoute,
  getDatasetsRoute,
  postDatasetsRoute,
  putDatasetsNameRoute,
} from '../routes'

export const postDatasetsRouteHandler: RouteHandler<typeof postDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsRouteHandler: RouteHandler<typeof getDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatasetsNameRouteHandler: RouteHandler<typeof deleteDatasetsNameRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getDatasetsNameRouteHandler: RouteHandler<typeof getDatasetsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatasetsNameRouteHandler: RouteHandler<typeof putDatasetsNameRoute> = async (c) => {
  throw new Error('Not implemented')
}
