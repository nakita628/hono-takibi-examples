import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getActionCreateTrafficMirrorFilterRuleRoute,
  postActionCreateTrafficMirrorFilterRuleRoute,
} from '../routes'

export const getActionCreateTrafficMirrorFilterRuleRouteHandler: RouteHandler<
  typeof getActionCreateTrafficMirrorFilterRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postActionCreateTrafficMirrorFilterRuleRouteHandler: RouteHandler<
  typeof postActionCreateTrafficMirrorFilterRuleRoute
> = async (c) => {
  throw new Error('Not implemented')
}
