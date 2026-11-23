import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteRecordingRulesRecordingRuleIDRoute,
  deleteRecordingRulesWriterRoute,
  getRecordingRulesRoute,
  getRecordingRulesWriterRoute,
  postRecordingRulesRoute,
  postRecordingRulesTestRoute,
  postRecordingRulesWriterRoute,
  putRecordingRulesRoute,
} from '../routes'

export const getRecordingRulesRouteHandler: RouteHandler<typeof getRecordingRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRecordingRulesRouteHandler: RouteHandler<typeof postRecordingRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putRecordingRulesRouteHandler: RouteHandler<typeof putRecordingRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postRecordingRulesTestRouteHandler: RouteHandler<
  typeof postRecordingRulesTestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecordingRulesWriterRouteHandler: RouteHandler<
  typeof deleteRecordingRulesWriterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getRecordingRulesWriterRouteHandler: RouteHandler<
  typeof getRecordingRulesWriterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postRecordingRulesWriterRouteHandler: RouteHandler<
  typeof postRecordingRulesWriterRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteRecordingRulesRecordingRuleIDRouteHandler: RouteHandler<
  typeof deleteRecordingRulesRecordingRuleIDRoute
> = async (c) => {
  throw new Error('Not implemented')
}
