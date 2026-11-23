import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getPamProfilesClientClientIdRoute,
  getPamProjectsProjectIdCompletionReportRoute,
  postPamChatRoute,
} from '../routes'

export const postPamChatRouteHandler: RouteHandler<typeof postPamChatRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getPamProfilesClientClientIdRouteHandler: RouteHandler<
  typeof getPamProfilesClientClientIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getPamProjectsProjectIdCompletionReportRouteHandler: RouteHandler<
  typeof getPamProjectsProjectIdCompletionReportRoute
> = async (c) => {
  throw new Error('Not implemented')
}
