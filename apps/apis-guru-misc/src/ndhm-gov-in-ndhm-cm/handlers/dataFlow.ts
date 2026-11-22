import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05HealthInformationNotifyRoute,
  postV05HealthInformationOnRequestRoute,
  postV05HealthInformationRequestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataFlowHandler = app
  .openapi(postV05HealthInformationNotifyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
