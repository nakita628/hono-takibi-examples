import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getFormatRotoBallerPremiumNewsByDateDateRoute,
  getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute,
  getFormatRotoBallerPremiumNewsByTeamTeamRoute,
  getFormatRotoBallerPremiumNewsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const formatHandler = app
  .openapi(getFormatRotoBallerPremiumNewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRotoBallerPremiumNewsByDateDateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRotoBallerPremiumNewsByPlayerIDPlayeridRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getFormatRotoBallerPremiumNewsByTeamTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
