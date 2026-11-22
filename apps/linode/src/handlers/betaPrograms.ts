import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getApiVersionAccountBetasBetaIdRoute,
  getApiVersionAccountBetasRoute,
  getApiVersionBetasBetaIdRoute,
  getApiVersionBetasRoute,
  postApiVersionAccountBetasRoute,
} from '../routes'

const app = new OpenAPIHono()

export const betaProgramsHandler = app
  .openapi(postApiVersionAccountBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionAccountBetasBetaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionBetasRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getApiVersionBetasBetaIdRoute, (c) => {
    throw new Error('Not implemented')
  })
