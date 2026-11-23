import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getTeamsPageNumKeysRoute,
  getTeamsPageNumRoute,
  getTeamsPageNumSimpleRoute,
  getTeamsYearPageNumKeysRoute,
  getTeamsYearPageNumRoute,
  getTeamsYearPageNumSimpleRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsHandler = app
  .openapi(getTeamsPageNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsPageNumKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsPageNumSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsYearPageNumRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsYearPageNumKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getTeamsYearPageNumSimpleRoute, (c) => {
    throw new Error('Not implemented')
  })
