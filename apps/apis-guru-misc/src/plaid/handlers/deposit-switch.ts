import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postDepositSwitchAltCreateRoute,
  postDepositSwitchCreateRoute,
  postDepositSwitchGetRoute,
  postDepositSwitchTokenCreateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const depositSwitchHandler = app
  .openapi(postDepositSwitchAltCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDepositSwitchCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDepositSwitchGetRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postDepositSwitchTokenCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
