import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getImagesChildObjectsIdRoute,
  getImagesDetailsIdRoute,
  getImagesIdRoute,
  getImagesOpenOfficeXmlIdRoute,
  getImagesSvgIdRoute,
  putImagesGetImageIdRoute,
  putImagesOpenOfficeXmlIdRoute,
} from '../routes'

export const getImagesChildObjectsIdRouteHandler: RouteHandler<
  typeof getImagesChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesDetailsIdRouteHandler: RouteHandler<typeof getImagesDetailsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putImagesGetImageIdRouteHandler: RouteHandler<
  typeof putImagesGetImageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof getImagesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putImagesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof putImagesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesSvgIdRouteHandler: RouteHandler<typeof getImagesSvgIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getImagesIdRouteHandler: RouteHandler<typeof getImagesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
