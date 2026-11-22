import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
  getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
  getRestApi3PlansPlanPlanIdTeamRoute,
  postRestApi3PlansPlanPlanIdTeamAtlassianRoute,
  postRestApi3PlansPlanPlanIdTeamPlanonlyRoute,
  putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute,
  putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const teamsInPlanHandler = app
  .openapi(getRestApi3PlansPlanPlanIdTeamRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PlansPlanPlanIdTeamAtlassianRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PlansPlanPlanIdTeamAtlassianAtlassianTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestApi3PlansPlanPlanIdTeamPlanonlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestApi3PlansPlanPlanIdTeamPlanonlyPlanOnlyTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
