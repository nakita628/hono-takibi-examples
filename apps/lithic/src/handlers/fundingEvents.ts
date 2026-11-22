import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getV1FundingEventsFundingEventTokenDetailsRoute,
  getV1FundingEventsFundingEventTokenRoute,
  getV1FundingEventsRoute,
} from '../routes'

export const getV1FundingEventsRouteHandler: RouteHandler<typeof getV1FundingEventsRoute> = async (
  c,
) => {}

export const getV1FundingEventsFundingEventTokenRouteHandler: RouteHandler<
  typeof getV1FundingEventsFundingEventTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1FundingEventsFundingEventTokenDetailsRouteHandler: RouteHandler<
  typeof getV1FundingEventsFundingEventTokenDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
