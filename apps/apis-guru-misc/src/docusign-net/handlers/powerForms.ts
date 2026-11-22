import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV21AccountsAccountIdPowerformsPowerFormIdRoute,
  deleteV21AccountsAccountIdPowerformsRoute,
  getV21AccountsAccountIdPowerformsPowerFormIdRoute,
  getV21AccountsAccountIdPowerformsRoute,
  getV21AccountsAccountIdPowerformsSendersRoute,
  postV21AccountsAccountIdPowerformsRoute,
  putV21AccountsAccountIdPowerformsPowerFormIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const powerFormsHandler = app
  .openapi(deleteV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV21AccountsAccountIdPowerformsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsSendersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV21AccountsAccountIdPowerformsPowerFormIdRoute, (c) => {
    throw new Error('Not implemented')
  })
