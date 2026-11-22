import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteZonesZoneIdRulesetsRulesetIdRoute,
  deleteZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  deleteZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute,
  getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute,
  getZonesZoneIdRulesetsRoute,
  getZonesZoneIdRulesetsRulesetIdRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute,
  getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute,
  patchZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute,
  postZonesZoneIdRulesetsRoute,
  postZonesZoneIdRulesetsRulesetIdRulesRoute,
  putZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute,
  putZonesZoneIdRulesetsRulesetIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const zoneRulesetsHandler = app
  .openapi(getZonesZoneIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdRulesetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsPhasesRulesetPhaseEntrypointVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putZonesZoneIdRulesetsRulesetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postZonesZoneIdRulesetsRulesetIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchZonesZoneIdRulesetsRulesetIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsRulesetIdVersionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getZonesZoneIdRulesetsRulesetIdVersionsRulesetVersionByTagRuleTagRoute, (c) => {
    throw new Error('Not implemented')
  })
