import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getHearingCongressChamberJacketNumberRoute,
  getHearingCongressChamberRoute,
  getHearingCongressRoute,
  getHearingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const hearingHandler = app
  .openapi(getHearingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHearingCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHearingCongressChamberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getHearingCongressChamberJacketNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
