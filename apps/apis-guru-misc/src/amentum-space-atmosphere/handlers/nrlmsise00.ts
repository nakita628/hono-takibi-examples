import type { RouteHandler } from '@hono/zod-openapi'
import type { getNrlmsise00Route } from '../routes'

export const getNrlmsise00RouteHandler: RouteHandler<typeof getNrlmsise00Route> = async (c) => {
  throw new Error('Not implemented')
}
