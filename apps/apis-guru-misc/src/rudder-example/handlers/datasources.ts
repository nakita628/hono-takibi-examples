import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteDatasourcesDatasourceIdRoute,
  getDatasourcesDatasourceIdRoute,
  getDatasourcesRoute,
  postDatasourcesDatasourceIdRoute,
  postDatasourcesReloadDatasourceIdRoute,
  postDatasourcesReloadRoute,
  putDatasourcesRoute,
} from '../routes'

export const getDatasourcesRouteHandler: RouteHandler<typeof getDatasourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putDatasourcesRouteHandler: RouteHandler<typeof putDatasourcesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasourcesReloadRouteHandler: RouteHandler<
  typeof postDatasourcesReloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasourcesReloadDatasourceIdRouteHandler: RouteHandler<
  typeof postDatasourcesReloadDatasourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteDatasourcesDatasourceIdRouteHandler: RouteHandler<
  typeof deleteDatasourcesDatasourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDatasourcesDatasourceIdRouteHandler: RouteHandler<
  typeof getDatasourcesDatasourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postDatasourcesDatasourceIdRouteHandler: RouteHandler<
  typeof postDatasourcesDatasourceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
