import type { RouteHandler } from '@hono/zod-openapi'
import type {
  putDbaasExternalEndpointSourceServiceNameAttachRoute,
  putDbaasExternalEndpointSourceServiceNameDetachRoute,
} from '../routes'

export const putDbaasExternalEndpointSourceServiceNameAttachRouteHandler: RouteHandler<
  typeof putDbaasExternalEndpointSourceServiceNameAttachRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putDbaasExternalEndpointSourceServiceNameDetachRouteHandler: RouteHandler<
  typeof putDbaasExternalEndpointSourceServiceNameDetachRoute
> = async (c) => {
  throw new Error('Not implemented')
}
