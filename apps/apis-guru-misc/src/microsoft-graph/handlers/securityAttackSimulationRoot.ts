import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteSecurityAttackSimulationRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  deleteSecurityAttackSimulationSimulationsSimulationIdRoute,
  getSecurityAttackSimulationRoute,
  getSecurityAttackSimulationSimulationAutomationsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  getSecurityAttackSimulationSimulationsRoute,
  getSecurityAttackSimulationSimulationsSimulationIdRoute,
  patchSecurityAttackSimulationRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute,
  patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
  patchSecurityAttackSimulationSimulationsSimulationIdRoute,
  postSecurityAttackSimulationSimulationAutomationsRoute,
  postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
  postSecurityAttackSimulationSimulationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const securityAttackSimulationRootHandler = app
  .openapi(deleteSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationSimulationAutomationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    deleteSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    patchSecurityAttackSimulationSimulationAutomationsSimulationAutomationIdRunsSimulationAutomationRunIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getSecurityAttackSimulationSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postSecurityAttackSimulationSimulationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchSecurityAttackSimulationSimulationsSimulationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
