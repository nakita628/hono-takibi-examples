import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAivmModelsAivmModelUuidUninstallRoute,
  getAivmModelsAivmModelUuidRoute,
  getAivmModelsRoute,
  postAivmModelsAivmModelUuidLoadRoute,
  postAivmModelsAivmModelUuidUnloadRoute,
  postAivmModelsAivmModelUuidUpdateRoute,
  postAivmModelsInstallRoute,
} from '../routes'

export const getAivmModelsRouteHandler: RouteHandler<typeof getAivmModelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAivmModelsInstallRouteHandler: RouteHandler<
  typeof postAivmModelsInstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAivmModelsAivmModelUuidRouteHandler: RouteHandler<
  typeof getAivmModelsAivmModelUuidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAivmModelsAivmModelUuidLoadRouteHandler: RouteHandler<
  typeof postAivmModelsAivmModelUuidLoadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAivmModelsAivmModelUuidUnloadRouteHandler: RouteHandler<
  typeof postAivmModelsAivmModelUuidUnloadRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAivmModelsAivmModelUuidUpdateRouteHandler: RouteHandler<
  typeof postAivmModelsAivmModelUuidUpdateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAivmModelsAivmModelUuidUninstallRouteHandler: RouteHandler<
  typeof deleteAivmModelsAivmModelUuidUninstallRoute
> = async (c) => {
  throw new Error('Not implemented')
}
