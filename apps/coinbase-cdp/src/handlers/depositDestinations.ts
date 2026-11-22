import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2DepositDestinationsDepositDestinationIdRoute,
  getV2DepositDestinationsRoute,
  postV2DepositDestinationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const depositDestinationsHandler = app
  .openapi(getV2DepositDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2DepositDestinationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2DepositDestinationsDepositDestinationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
