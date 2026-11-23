import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteChannelsIdRoute,
  getChannelsIdRoute,
  getChannelsRoute,
  postChannelsRoute,
  putChannelsIdConfigureLogsRoute,
  putChannelsIdCredentialsRoute,
  putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute,
  putChannelsIdRoute,
} from '../routes'

export const putChannelsIdConfigureLogsRouteHandler: RouteHandler<
  typeof putChannelsIdConfigureLogsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postChannelsRouteHandler: RouteHandler<typeof postChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getChannelsRouteHandler: RouteHandler<typeof getChannelsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteChannelsIdRouteHandler: RouteHandler<typeof deleteChannelsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getChannelsIdRouteHandler: RouteHandler<typeof getChannelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putChannelsIdRouteHandler: RouteHandler<typeof putChannelsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putChannelsIdCredentialsRouteHandler: RouteHandler<
  typeof putChannelsIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRouteHandler: RouteHandler<
  typeof putChannelsIdIngestEndpointsIngestEndpointIdCredentialsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
