import { OpenAPIHono } from '@hono/zod-openapi'
import {
  postV05HealthInformationHiuOnRequestRoute,
  postV05HealthInformationTransferRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dataFlowHandler = app
  .openapi(postV05HealthInformationHiuOnRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV05HealthInformationTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
