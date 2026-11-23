import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFedV1FundingConditionsRoute,
  getFedV1InflationExpectationsRoute,
  getFedV1InflationRoute,
  getFedV1LaborMarketRoute,
  getFedV1TreasuryYieldsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fedHandler = app
  .openapi(getFedV1FundingConditionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFedV1InflationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFedV1InflationExpectationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFedV1LaborMarketRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFedV1TreasuryYieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
