import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1FpslAnalyticsAccountIdLoansRoute,
  getV1FpslLoansRoute,
  getV1FpslTiersRoute,
} from '../routes'

const app = new OpenAPIHono()

export const fpslProgramHandler = app
  .openapi(getV1FpslAnalyticsAccountIdLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FpslLoansRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1FpslTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
