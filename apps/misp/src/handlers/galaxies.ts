import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteGalaxiesDeleteGalaxyIdRoute,
  getGalaxiesRoute,
  getGalaxiesViewGalaxyIdRoute,
  postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute,
  postGalaxiesExportGalaxyIdRoute,
  postGalaxiesImportRoute,
  postGalaxiesRoute,
  postGalaxiesUpdateRoute,
} from '../routes'

export const getGalaxiesRouteHandler: RouteHandler<typeof getGalaxiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postGalaxiesRouteHandler: RouteHandler<typeof postGalaxiesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGalaxiesViewGalaxyIdRouteHandler: RouteHandler<
  typeof getGalaxiesViewGalaxyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGalaxiesUpdateRouteHandler: RouteHandler<typeof postGalaxiesUpdateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteGalaxiesDeleteGalaxyIdRouteHandler: RouteHandler<
  typeof deleteGalaxiesDeleteGalaxyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGalaxiesImportRouteHandler: RouteHandler<typeof postGalaxiesImportRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postGalaxiesExportGalaxyIdRouteHandler: RouteHandler<
  typeof postGalaxiesExportGalaxyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRouteHandler: RouteHandler<
  typeof postGalaxiesAttachClusterAttachTargetIdAttachTargetTypeLocalLocalRoute
> = async (c) => {
  throw new Error('Not implemented')
}
