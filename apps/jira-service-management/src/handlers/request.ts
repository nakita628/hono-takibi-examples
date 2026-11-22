import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteRestServicedeskapiRequestIssueIdOrKeyNotificationRoute,
  deleteRestServicedeskapiRequestIssueIdOrKeyParticipantRoute,
  deleteRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute,
  getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute,
  getRestServicedeskapiRequestIssueIdOrKeyApprovalRoute,
  getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdRoute,
  getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailRoute,
  getRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute,
  getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentRoute,
  getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdRoute,
  getRestServicedeskapiRequestIssueIdOrKeyCommentRoute,
  getRestServicedeskapiRequestIssueIdOrKeyNotificationRoute,
  getRestServicedeskapiRequestIssueIdOrKeyParticipantRoute,
  getRestServicedeskapiRequestIssueIdOrKeyRoute,
  getRestServicedeskapiRequestIssueIdOrKeySlaRoute,
  getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdRoute,
  getRestServicedeskapiRequestIssueIdOrKeyStatusRoute,
  getRestServicedeskapiRequestIssueIdOrKeyTransitionRoute,
  getRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute,
  getRestServicedeskapiRequestRoute,
  postRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute,
  postRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute,
  postRestServicedeskapiRequestIssueIdOrKeyCommentRoute,
  postRestServicedeskapiRequestIssueIdOrKeyParticipantRoute,
  postRestServicedeskapiRequestIssueIdOrKeyTransitionRoute,
  postRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute,
  postRestServicedeskapiRequestRoute,
  postRestServicedeskapiRequestValidateRoute,
  putRestServicedeskapiRequestIssueIdOrKeyNotificationRoute,
} from '../routes'

const app = new OpenAPIHono()

export const requestHandler = app
  .openapi(getRestServicedeskapiRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyApprovalRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestIssueIdOrKeyApprovalApprovalIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestIssueIdOrKeyAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyAttachmentAttachmentIdThumbnailRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestIssueIdOrKeyCommentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyCommentCommentIdAttachmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiRequestIssueIdOrKeyNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putRestServicedeskapiRequestIssueIdOrKeyNotificationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiRequestIssueIdOrKeyParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestIssueIdOrKeyParticipantRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeySlaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeySlaSlaMetricIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestIssueIdOrKeyTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestIssueIdOrKeyTransitionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postRestServicedeskapiRequestRequestIdOrKeyFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
