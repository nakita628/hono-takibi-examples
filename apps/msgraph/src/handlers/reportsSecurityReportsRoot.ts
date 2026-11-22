import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteReportsSecurityRoute,
  getReportsSecurityGetAttackSimulationRepeatOffendersRoute,
  getReportsSecurityGetAttackSimulationSimulationUserCoverageRoute,
  getReportsSecurityGetAttackSimulationTrainingUserCoverageRoute,
  getReportsSecurityRoute,
  patchReportsSecurityRoute,
} from '../routes'

const app = new OpenAPIHono()

export const reportsSecurityReportsRootHandler = app
  .openapi(getReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteReportsSecurityRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityGetAttackSimulationRepeatOffendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityGetAttackSimulationSimulationUserCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getReportsSecurityGetAttackSimulationTrainingUserCoverageRoute, (c) => {
    throw new Error('Not implemented')
  })
