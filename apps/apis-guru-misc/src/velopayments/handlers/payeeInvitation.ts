import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV3PayeesBatchBatchIdRoute,
  getV3PayeesPayorsPayorIdInvitationStatusRoute,
  getV4PayeesBatchBatchIdRoute,
  getV4PayeesPayorsPayorIdInvitationStatusRoute,
  postV3PayeesPayeeIdInviteRoute,
  postV3PayeesRoute,
  postV4PayeesPayeeIdInviteRoute,
  postV4PayeesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const payeeInvitationHandler = app
  .openapi(postV3PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV3PayeesPayorsPayorIdInvitationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV3PayeesPayeeIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesBatchBatchIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV4PayeesPayorsPayorIdInvitationStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV4PayeesPayeeIdInviteRoute, (c) => {
    throw new Error('Not implemented')
  })
