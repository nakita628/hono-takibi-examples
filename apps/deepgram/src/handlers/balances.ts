import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1ProjectsProjectIdBalancesBalanceIdRoute,
  getV1ProjectsProjectIdBalancesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const balancesHandler = app
  .openapi(getV1ProjectsProjectIdBalancesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProjectsProjectIdBalancesBalanceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
