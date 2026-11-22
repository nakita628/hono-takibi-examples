import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  getOrganizationOrganizationIdUpgradePipelineStepsRoute,
  getOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute,
  postOrganizationOrganizationIdUpgradePipelineStepsRoute,
  postProjectProjectServiceServiceNameUpgradeValidationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const upgradePipelineHandler = app
  .openapi(postOrganizationOrganizationIdUpgradePipelineStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUpgradePipelineStepsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchOrganizationOrganizationIdUpgradePipelineStepsStepIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectServiceServiceNameUpgradeValidationRoute, (c) => {
    throw new Error('Not implemented')
  })
