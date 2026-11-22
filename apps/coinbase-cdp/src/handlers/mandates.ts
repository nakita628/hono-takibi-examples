import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getV2MandatesMandateIdApprovalsApprovalIdRoute,
  getV2MandatesMandateIdApprovalsRoute,
  getV2MandatesMandateIdApprovalsWalletOptionsRoute,
  getV2MandatesMandateIdRevocationsRevocationIdRoute,
  getV2MandatesMandateIdRevocationsRoute,
  getV2MandatesMandateIdRevocationsWalletOptionsRoute,
  getV2MandatesMandateIdRoute,
  getV2MandatesRoute,
  postV2MandatesMandateIdApprovalsWalletRoute,
  postV2MandatesMandateIdCancelRoute,
  postV2MandatesMandateIdRevocationsWalletRoute,
  postV2MandatesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const mandatesHandler = app
  .openapi(postV2MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsRevocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdRevocationsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdRevocationsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV2MandatesMandateIdApprovalsWalletRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV2MandatesMandateIdApprovalsWalletOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
