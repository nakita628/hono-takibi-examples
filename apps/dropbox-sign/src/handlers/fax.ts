import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteFaxFaxIdRoute,
  getFaxFaxIdRoute,
  getFaxFilesFaxIdRoute,
  getFaxListRoute,
  postFaxSendRoute,
} from '../routes'

export const getFaxFaxIdRouteHandler: RouteHandler<typeof getFaxFaxIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteFaxFaxIdRouteHandler: RouteHandler<typeof deleteFaxFaxIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getFaxFilesFaxIdRouteHandler: RouteHandler<typeof getFaxFilesFaxIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFaxListRouteHandler: RouteHandler<typeof getFaxListRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postFaxSendRouteHandler: RouteHandler<typeof postFaxSendRoute> = async (c) => {
  throw new Error('Not implemented')
}
