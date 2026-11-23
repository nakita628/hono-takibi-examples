import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getMetricsClientFeedbackFeedbackIdRoute,
  getMetricsClientFeedbackRoute,
  getMetricsClientSatisfactionRoute,
  getMetricsCrcRoute,
  getMetricsImRoute,
  getMetricsIssuesZoomroomsRoute,
  getMetricsIssuesZoomroomsZoomroomIdRoute,
  getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRoute,
  getMetricsMeetingsMeetingIdParticipantsQosRoute,
  getMetricsMeetingsMeetingIdParticipantsRoute,
  getMetricsMeetingsMeetingIdParticipantsSatisfactionRoute,
  getMetricsMeetingsMeetingIdParticipantsSharingRoute,
  getMetricsMeetingsMeetingIdRoute,
  getMetricsMeetingsRoute,
  getMetricsWebinarsRoute,
  getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRoute,
  getMetricsWebinarsWebinarIdParticipantsQosRoute,
  getMetricsWebinarsWebinarIdParticipantsRoute,
  getMetricsWebinarsWebinarIdParticipantsSatisfactionRoute,
  getMetricsWebinarsWebinarIdParticipantsSharingRoute,
  getMetricsWebinarsWebinarIdRoute,
  getMetricsZoomroomsIssuesRoute,
  getMetricsZoomroomsRoute,
  getMetricsZoomroomsZoomroomIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const metricsHandler = app
  .openapi(getMetricsClientFeedbackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsClientFeedbackFeedbackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsClientSatisfactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsCrcRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsImRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsIssuesZoomroomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsIssuesZoomroomsZoomroomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdParticipantsQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdParticipantsSatisfactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdParticipantsSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsMeetingsMeetingIdParticipantsParticipantIdQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdParticipantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdParticipantsQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdParticipantsSatisfactionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdParticipantsSharingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsWebinarsWebinarIdParticipantsParticipantIdQosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsZoomroomsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsZoomroomsIssuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMetricsZoomroomsZoomroomIdRoute, (c) => {
    throw new Error('Not implemented')
  })
