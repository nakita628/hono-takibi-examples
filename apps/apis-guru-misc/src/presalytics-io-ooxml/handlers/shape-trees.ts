import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShapeTreesChildObjectsIdRoute,
  getShapeTreesDetailsIdRoute,
  getShapeTreesIdRoute,
  getShapeTreesOpenOfficeXmlIdRoute,
  getShapeTreesSvgIdRoute,
  putShapeTreesOpenOfficeXmlIdRoute,
} from '../routes'

export const getShapeTreesChildObjectsIdRouteHandler: RouteHandler<
  typeof getShapeTreesChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapeTreesDetailsIdRouteHandler: RouteHandler<
  typeof getShapeTreesDetailsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapeTreesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof getShapeTreesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShapeTreesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof putShapeTreesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapeTreesSvgIdRouteHandler: RouteHandler<typeof getShapeTreesSvgIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShapeTreesIdRouteHandler: RouteHandler<typeof getShapeTreesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
