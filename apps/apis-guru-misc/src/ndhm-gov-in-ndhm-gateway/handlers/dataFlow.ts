import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05HealthInformationCmOnRequestRoute,
  postV05HealthInformationCmRequestRoute,
  postV05HealthInformationHipOnRequestRoute,
  postV05HealthInformationHipRequestRoute,
  postV05HealthInformationNotifyRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataFlowHandler = app
  .openapi(postV05HealthInformationCmOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationCmRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHipOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationHipRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
