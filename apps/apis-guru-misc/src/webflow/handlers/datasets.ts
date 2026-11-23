import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatasetsDatasetIdRoute,
  getDatasetsDatasetIdRoute,
  getDatasetsRoute,
  optionsDatasetsDatasetIdRoute,
  optionsDatasetsRoute,
  patchDatasetsDatasetIdRoute,
  postDatasetsRoute,
} from '../routes'

export const getDatasetsRouteHandler: RouteHandler<typeof getDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDatasetsRouteHandler: RouteHandler<typeof optionsDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasetsRouteHandler: RouteHandler<typeof postDatasetsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof deleteDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof getDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const optionsDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof optionsDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const patchDatasetsDatasetIdRouteHandler: RouteHandler<
  typeof patchDatasetsDatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
