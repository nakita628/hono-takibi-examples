import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getOauthUserinfoRoute,
  postOauthDeviceRoute,
  postOauthRegisterRoute,
  postOauthUserinfoRoute,
} from '../routes'

export const postOauthRegisterRouteHandler: RouteHandler<typeof postOauthRegisterRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthDeviceRouteHandler: RouteHandler<typeof postOauthDeviceRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getOauthUserinfoRouteHandler: RouteHandler<typeof getOauthUserinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postOauthUserinfoRouteHandler: RouteHandler<typeof postOauthUserinfoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}
