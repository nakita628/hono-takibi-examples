import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteProjectProjectSlugCheckoutKeyFingerprintRoute,
  deleteProjectProjectSlugEnvvarNameRoute,
  deleteProjectProjectSlugRoute,
  getProjectProjectSlugCheckoutKeyFingerprintRoute,
  getProjectProjectSlugCheckoutKeyRoute,
  getProjectProjectSlugEnvvarNameRoute,
  getProjectProjectSlugEnvvarRoute,
  getProjectProjectSlugPipelineMineRoute,
  getProjectProjectSlugPipelinePipelineNumberRoute,
  getProjectProjectSlugPipelineRoute,
  getProjectProjectSlugRoute,
  getProjectProjectSlugScheduleRoute,
  getProjectProviderOrganizationProjectSettingsRoute,
  patchProjectProviderOrganizationProjectSettingsRoute,
  postProjectProjectSlugCheckoutKeyRoute,
  postProjectProjectSlugEnvvarRoute,
  postProjectProjectSlugJobJobNumberCancelRoute,
  postProjectProjectSlugPipelineRoute,
  postProjectProjectSlugScheduleRoute,
  postProjectProviderOrganizationProjectPipelineRunRoute,
} from '../routes'

const app = new OpenAPIHono()

export const projectHandler = app
  .openapi(deleteProjectProjectSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugCheckoutKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSlugCheckoutKeyFingerprintRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugEnvvarRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteProjectProjectSlugEnvvarNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugJobJobNumberCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugPipelineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelineMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugPipelinePipelineNumberRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProjectSlugScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProjectSlugScheduleRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getProjectProviderOrganizationProjectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchProjectProviderOrganizationProjectSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postProjectProviderOrganizationProjectPipelineRunRoute, (c) => {
    throw new Error('Not implemented')
  })
