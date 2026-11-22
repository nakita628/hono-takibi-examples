import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirDirIdInfringementClaimsRoute,
  getInfringementClaimsClaimIdRoute,
  postInfringementClaimsClaimIdContestRoute,
  putDirDirIdInfringementUpdateRoute,
} from '../routes'

const app = new OpenAPIHono()

export const infringementClaimsHandler = app
  .openapi(getDirDirIdInfringementClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putDirDirIdInfringementUpdateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getInfringementClaimsClaimIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postInfringementClaimsClaimIdContestRoute, (c) => {
    throw new Error('Not implemented')
  })
