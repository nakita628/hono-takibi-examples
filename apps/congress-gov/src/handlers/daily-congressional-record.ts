import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getDailyCongressionalRecordRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute,
  getDailyCongressionalRecordVolumeNumberIssueNumberRoute,
  getDailyCongressionalRecordVolumeNumberRoute,
} from '../routes'

export const getDailyCongressionalRecordRouteHandler: RouteHandler<
  typeof getDailyCongressionalRecordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDailyCongressionalRecordVolumeNumberRouteHandler: RouteHandler<
  typeof getDailyCongressionalRecordVolumeNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDailyCongressionalRecordVolumeNumberIssueNumberRouteHandler: RouteHandler<
  typeof getDailyCongressionalRecordVolumeNumberIssueNumberRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRouteHandler: RouteHandler<
  typeof getDailyCongressionalRecordVolumeNumberIssueNumberArticlesRoute
> = async (c) => {
  throw new Error('Not implemented')
}
