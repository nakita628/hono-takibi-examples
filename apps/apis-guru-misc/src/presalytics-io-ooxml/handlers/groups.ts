import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getGroupsChildObjectsIdRoute,
  getGroupsDetailsIdRoute,
  getGroupsIdRoute,
  getGroupsOpenOfficeXmlIdRoute,
  getGroupsSvgIdRoute,
  putGroupsOpenOfficeXmlIdRoute,
} from '../routes'

export const getGroupsChildObjectsIdRouteHandler: RouteHandler<
  typeof getGroupsChildObjectsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsDetailsIdRouteHandler: RouteHandler<typeof getGroupsDetailsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getGroupsOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof getGroupsOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putGroupsOpenOfficeXmlIdRouteHandler: RouteHandler<
  typeof putGroupsOpenOfficeXmlIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsSvgIdRouteHandler: RouteHandler<typeof getGroupsSvgIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getGroupsIdRouteHandler: RouteHandler<typeof getGroupsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}
