import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getCommitteePrintCongressChamberJacketNumberRoute,
  getCommitteePrintCongressChamberJacketNumberTextRoute,
  getCommitteePrintCongressChamberRoute,
  getCommitteePrintCongressRoute,
  getCommitteePrintRoute,
} from '../routes'

const app = new OpenAPIHono()

export const committeePrintHandler = app
  .openapi(getCommitteePrintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteePrintCongressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteePrintCongressChamberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteePrintCongressChamberJacketNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCommitteePrintCongressChamberJacketNumberTextRoute, (c) => {
    throw new Error('Not implemented')
  })
