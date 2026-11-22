import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV1HeadlessAccountsStatusRoute,
  postV1HeadlessAccountsClaimRoute,
  postV1HeadlessAccountsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const headlessAccountsHandler = app
  .openapi(postV1HeadlessAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HeadlessAccountsStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1HeadlessAccountsClaimRoute, (c) => {
    throw new Error('Not implemented')
  })
