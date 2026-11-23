import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getShapesChildObjectsIdRoute,
  getShapesDetailsIdRoute,
  getShapesIdRoute,
  getShapesOpenOfficeXmlIdRoute,
  getShapesSvgIdRoute,
  putShapesOpenOfficeXmlIdRoute,
} from '../routes'

export const getShapesChildObjectsIdRouteHandler: RouteHandler<
  typeof getShapesChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapesDetailsIdRouteHandler: RouteHandler<typeof getShapesDetailsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getShapesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof getShapesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putShapesOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof putShapesOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapesSvgIdRouteHandler: RouteHandler<typeof getShapesSvgIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getShapesIdRouteHandler: RouteHandler<typeof getShapesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
