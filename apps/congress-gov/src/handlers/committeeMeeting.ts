import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteeMeetingCongressChamberEventIdRoute,
  getCommitteeMeetingCongressChamberRoute,
  getCommitteeMeetingCongressRoute,
  getCommitteeMeetingRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeeMeetingHandler = app
  .openapi(getCommitteeMeetingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeMeetingCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeMeetingCongressChamberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteeMeetingCongressChamberEventIdRoute, (c) => {
    throw new Error('Not implemented')
  })
