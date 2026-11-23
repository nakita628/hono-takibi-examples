import type { RouteHandler } from '@hono/zod-openapi'
import type {
  getFedV1FundingConditionsRoute,
  getFedV1InflationExpectationsRoute,
  getFedV1InflationRoute,
  getFedV1LaborMarketRoute,
  getFedV1TreasuryYieldsRoute,
} from '../routes'

export const getFedV1FundingConditionsRouteHandler: RouteHandler<
  typeof getFedV1FundingConditionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFedV1InflationRouteHandler: RouteHandler<typeof getFedV1InflationRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getFedV1InflationExpectationsRouteHandler: RouteHandler<
  typeof getFedV1InflationExpectationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFedV1LaborMarketRouteHandler: RouteHandler<
  typeof getFedV1LaborMarketRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getFedV1TreasuryYieldsRouteHandler: RouteHandler<
  typeof getFedV1TreasuryYieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}
