import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEtfGlobalV1AnalyticsRoute,
  getEtfGlobalV1ConstituentsRoute,
  getEtfGlobalV1FundFlowsRoute,
  getEtfGlobalV1ProfilesRoute,
  getEtfGlobalV1TaxonomiesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const etfGlobalHandler = app
  .openapi(getEtfGlobalV1AnalyticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfGlobalV1ConstituentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfGlobalV1FundFlowsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfGlobalV1ProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEtfGlobalV1TaxonomiesRoute, (c) => {
    throw new Error('Not implemented')
  })
