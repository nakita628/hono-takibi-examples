import type { RouteHandler } from '@hono/zod-openapi'
import type { getVoiceSdkCallReportsCallIdRoute, getVoiceSdkCallReportsRoute } from '../routes'

export const getVoiceSdkCallReportsRouteHandler: RouteHandler<
  typeof getVoiceSdkCallReportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getVoiceSdkCallReportsCallIdRouteHandler: RouteHandler<
  typeof getVoiceSdkCallReportsCallIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}
