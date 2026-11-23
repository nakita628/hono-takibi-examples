import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getSmartArtsChildObjectsIdRoute,
  getSmartArtsDetailsIdRoute,
  getSmartArtsIdRoute,
  getSmartArtsOpenOfficeXmlIdRoute,
  getSmartArtsSvgIdRoute,
  putSmartArtsOpenOfficeXmlIdRoute,
} from '../routes'

export const getSmartArtsChildObjectsIdRouteHandler: RouteHandler<
  typeof getSmartArtsChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSmartArtsDetailsIdRouteHandler: RouteHandler<
  typeof getSmartArtsDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSmartArtsOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof getSmartArtsOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putSmartArtsOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof putSmartArtsOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getSmartArtsSvgIdRouteHandler: RouteHandler<typeof getSmartArtsSvgIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getSmartArtsIdRouteHandler: RouteHandler<typeof getSmartArtsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
