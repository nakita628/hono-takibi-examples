import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatasetsv2DatasetIdRoute,
  getDatasetsv2DatasetIdRoute,
  getDatasetsv2Route,
  postDatasetsv2Route,
  putDatasetsv2DatasetIdRoute,
} from '../routes'

export const postDatasetsv2RouteHandler: RouteHandler<typeof postDatasetsv2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsv2RouteHandler: RouteHandler<typeof getDatasetsv2Route> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatasetsv2DatasetIdRouteHandler: RouteHandler<
  typeof deleteDatasetsv2DatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasetsv2DatasetIdRouteHandler: RouteHandler<
  typeof getDatasetsv2DatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatasetsv2DatasetIdRouteHandler: RouteHandler<
  typeof putDatasetsv2DatasetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
