import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAutomationsEmailReceiptRuleIdRoute,
  deleteAutomationsFaxInboundInboundRuleIdRoute,
  deleteAutomationsFaxReceiptsRuleIdRoute,
  deleteAutomationsSmsInboundInboundRuleIdRoute,
  deleteAutomationsSmsReceiptsReceiptRuleIdRoute,
  deleteAutomationsVoiceReceiptsReceiptRuleIdRoute,
  getAutomationsEmailReceiptRoute,
  getAutomationsEmailReceiptRuleIdRoute,
  getAutomationsFaxInboundInboundRuleIdRoute,
  getAutomationsFaxInboundRoute,
  getAutomationsFaxReceiptsRoute,
  getAutomationsFaxReceiptsRuleIdRoute,
  getAutomationsSmsInboundInboundRuleIdRoute,
  getAutomationsSmsInboundRoute,
  getAutomationsSmsReceiptsReceiptRuleIdRoute,
  getAutomationsSmsReceiptsRoute,
  getAutomationsVoiceReceiptsReceiptRuleIdRoute,
  getAutomationsVoiceReceiptsRoute,
  postAutomationsEmailReceiptRoute,
  postAutomationsFaxInboundRoute,
  postAutomationsFaxReceiptsRoute,
  postAutomationsSmsInboundIndexRoute,
  postAutomationsSmsReceiptsRoute,
  postAutomationsVoiceReceiptsRoute,
  putAutomationsEmailReceiptRuleIdRoute,
  putAutomationsFaxInboundInboundRuleIdRoute,
  putAutomationsFaxReceiptsRuleIdRoute,
  putAutomationsSmsInboundInboundRuleIdRoute,
  putAutomationsSmsReceiptsReceiptRuleIdRoute,
  putAutomationsVoiceReceiptsReceiptRuleIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const automationsHandler = app
  .openapi(getAutomationsEmailReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsEmailReceiptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsEmailReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsEmailReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsEmailReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsFaxInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsFaxInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsFaxInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsFaxInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsFaxInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsFaxReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsFaxReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsFaxReceiptsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsFaxReceiptsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsFaxReceiptsRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsSmsInboundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsSmsInboundIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsSmsInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsSmsInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsSmsInboundInboundRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsSmsReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsSmsReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsSmsReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsSmsReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsSmsReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsVoiceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAutomationsVoiceReceiptsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAutomationsVoiceReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAutomationsVoiceReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putAutomationsVoiceReceiptsReceiptRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
