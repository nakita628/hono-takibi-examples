import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getEthV1ConfigDepositContractRoute,
  getEthV1ConfigForkScheduleRoute,
  getEthV1ConfigSpecRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getEthV1ConfigForkScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ConfigSpecRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getEthV1ConfigDepositContractRoute, (c) => {
    throw new Error('Not implemented')
  })
